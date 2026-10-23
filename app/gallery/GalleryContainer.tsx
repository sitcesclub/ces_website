"use client";

import { useState } from "react";
import {
  galleryCategories,
  type BookCategory,
  type GalleryPhoto,
} from "@/data/gallery";
import GalleryHero from "./GalleryHero";
import BookshelfStage from "./BookshelfStage";
import CategoryPhotoGallery, {
  type CategoryPhotoItem,
} from "./CategoryPhotoGallery";
import PhotoLightboxModal from "./PhotoLightboxModal";

type ViewMode = "shelf" | "gallery";

interface ActiveLightboxState {
  photo: GalleryPhoto;
  eventTitle: string;
  index: number;
  total: number;
  activeItems: CategoryPhotoItem[];
}

export default function GalleryContainer() {
  const [viewMode, setViewMode] = useState<ViewMode>("shelf");
  const [selectedCategory, setSelectedCategory] = useState<BookCategory | null>(
    null
  );
  const [activeLightbox, setActiveLightbox] =
    useState<ActiveLightboxState | null>(null);

  // User selects a book from the shelf -> open photo gallery directly
  const handleSelectCategory = (category: BookCategory) => {
    setSelectedCategory(category);
    setViewMode("gallery");
  };

  // Switch category directly inside the photo gallery
  const handleSwitchCategory = (category: BookCategory) => {
    setSelectedCategory(category);
  };

  // Return to 4-book bookshelf stage
  const handleReturnToGallery = () => {
    setViewMode("shelf");
    setSelectedCategory(null);
    setActiveLightbox(null);
  };

  // Open photo in full-screen lightbox
  const handlePhotoClick = (
    photo: GalleryPhoto,
    index: number,
    eventTitle: string,
    activeItems: CategoryPhotoItem[]
  ) => {
    setActiveLightbox({
      photo,
      eventTitle,
      index,
      total: activeItems.length,
      activeItems,
    });
  };

  // Lightbox navigate previous
  const handleLightboxPrev = () => {
    if (!activeLightbox) return;
    const nextIndex =
      (activeLightbox.index - 1 + activeLightbox.total) %
      activeLightbox.total;
    const nextItem = activeLightbox.activeItems[nextIndex];
    if (nextItem) {
      setActiveLightbox({
        ...activeLightbox,
        index: nextIndex,
        photo: nextItem.photo,
        eventTitle: nextItem.eventTitle,
      });
    }
  };

  // Lightbox navigate next
  const handleLightboxNext = () => {
    if (!activeLightbox) return;
    const nextIndex = (activeLightbox.index + 1) % activeLightbox.total;
    const nextItem = activeLightbox.activeItems[nextIndex];
    if (nextItem) {
      setActiveLightbox({
        ...activeLightbox,
        index: nextIndex,
        photo: nextItem.photo,
        eventTitle: nextItem.eventTitle,
      });
    }
  };

  const currentCategory = selectedCategory || galleryCategories[0];

  return (
    <div className="relative min-h-[calc(100vh-5rem)] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
      {/* Bookshelf State */}
      {viewMode === "shelf" && (
        <div className="flex flex-col gap-6 sm:gap-10 animate-fadeIn">
          <GalleryHero totalBooks={galleryCategories.length} />

          <BookshelfStage
            categories={galleryCategories}
            selectedCategoryId={selectedCategory?.id || null}
            onSelectCategory={handleSelectCategory}
          />
        </div>
      )}

      {/* Modern VSCO-Style Photo Gallery View */}
      {viewMode === "gallery" && currentCategory && (
        <CategoryPhotoGallery
          category={currentCategory}
          allCategories={galleryCategories}
          onReturnToGallery={handleReturnToGallery}
          onSelectCategory={handleSwitchCategory}
          onPhotoClick={handlePhotoClick}
        />
      )}

      {/* High-Resolution Photo Lightbox */}
      {activeLightbox && (
        <PhotoLightboxModal
          photo={activeLightbox.photo}
          eventTitle={activeLightbox.eventTitle}
          currentIndex={activeLightbox.index}
          totalPhotos={activeLightbox.total}
          onPrev={handleLightboxPrev}
          onNext={handleLightboxNext}
          onClose={() => setActiveLightbox(null)}
        />
      )}
    </div>
  );
}

