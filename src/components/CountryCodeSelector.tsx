"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import styles from "./CountryCodeSelector.module.css";
import { COUNTRIES, Country } from "../data/countries";

interface CountryCodeSelectorProps {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
}

export default function CountryCodeSelector({
  selectedCountry,
  onSelect
}: CountryCodeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      // Auto-focus search input when opened
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Filter countries based on search query
  const filteredCountries = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.dialCode.toLowerCase().includes(query) ||
        c.code.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSelectCountry = (country: Country) => {
    onSelect(country);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className={styles.selectorWrapper} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        className={styles.triggerBtn}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Select Country Code"
      >
        <Image
          src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
          alt={selectedCountry.name}
          width={20}
          height={15}
          className={styles.flagImg}
          unoptimized
        />
        <span className={styles.dialCodeText}>{selectedCountry.dialCode}</span>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>▾</span>
      </button>

      {/* Floating Dropdown Popover */}
      {isOpen && (
        <div
          className={styles.dropdownPopover}
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Search Box */}
          <div className={styles.searchBox}>
            <svg
              className={styles.searchIcon}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              className={styles.searchInput}
              placeholder="Search country or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Scrollable Country List */}
          <div
            className={styles.countryList}
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => {
                const isSelected = country.code === selectedCountry.code;
                return (
                  <button
                    key={`${country.code}-${country.dialCode}`}
                    type="button"
                    className={`${styles.countryItem} ${
                      isSelected ? styles.countryItemActive : ""
                    }`}
                    onClick={() => handleSelectCountry(country)}
                  >
                    <div className={styles.countryItemLeft}>
                      <Image
                        src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                        alt={country.name}
                        width={20}
                        height={15}
                        className={styles.flagImg}
                        unoptimized
                      />
                      <span className={styles.countryName}>{country.name}</span>
                    </div>
                    <span className={styles.itemDialCode}>{country.dialCode}</span>
                  </button>
                );
              })
            ) : (
              <div className={styles.noResults}>No country found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
