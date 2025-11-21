"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Globe, Instagram, Linkedin, MessageCircle, Send, Star, Twitter, Users, Youtube } from 'lucide-react';

export default function DestinationsPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "Tours", id: "tours" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Chunga-Changa"
          button={{
            text: "Book Now",
            href: "https://booking.chunga-changa.com"
          }}
        />
      </div>

      <div id="destinations-hero" data-section="destinations-hero">
        <ProductCardThree
          title="Explore Our Amazing Destinations"
          description="From exotic tropical paradises to majestic mountain peaks, discover our handpicked destinations that offer unforgettable experiences"
          tag="All Destinations"
          tagIcon={Globe}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "bali-adventure",
              name: "Bali Cultural Adventure",
              price: "$1,899",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714021601-fdhxjs5l.jpg",
              imageAlt: "Bali temple and rice terraces",
              initialQuantity: 2
            },
            {
              id: "maldives-luxury",
              name: "Maldives Luxury Escape",
              price: "$3,499",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714022825-gu7am372.jpg",
              imageAlt: "Maldives overwater villa",
              initialQuantity: 1
            },
            {
              id: "safari-experience",
              name: "African Safari Experience",
              price: "$2,799",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714024735-4jt73cmx.jpg",
              imageAlt: "African wildlife safari",
              initialQuantity: 1
            },
            {
              id: "mountain-trek",
              name: "Himalayan Mountain Trek",
              price: "$2,299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714025784-2nv8zj4l.jpg",
              imageAlt: "Mountain trekking adventure",
              initialQuantity: 1
            },
            {
              id: "europe-cultural",
              name: "European Cultural Tour",
              price: "$2,499",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714029024-abqmrh0k.jpg",
              imageAlt: "European cultural sites",
              initialQuantity: 1
            },
            {
              id: "beach-paradise",
              name: "Tropical Beach Paradise",
              price: "$1,799",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714027972-lmkelmbf.jpg",
              imageAlt: "Tropical beach paradise",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="destination-features" data-section="destination-features">
        <FeatureCardSeven
          title="What Makes Our Destinations Special"
          description="Every destination we offer has been carefully selected and personally visited by our travel experts"
          tag="Destination Features"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Authentic Experiences",
              description: "Connect with local cultures through immersive activities, traditional cuisine, and meaningful interactions with local communities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714029024-abqmrh0k.jpg",
              imageAlt: "Authentic cultural experience"
            },
            {
              id: "2",
              title: "Sustainable Tourism",
              description: "We partner with eco-friendly accommodations and support conservation efforts to preserve destinations for future generations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714025784-2nv8zj4l.jpg",
              imageAlt: "Sustainable mountain tourism"
            }
          ]}
        />
      </div>

      <div id="destination-testimonials" data-section="destination-testimonials">
        <TestimonialCardTwo
          title="Traveler Stories from Around the World"
          description="Hear from adventurers who have explored our destinations and created memories that last a lifetime"
          tag="Travel Stories"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Maria Santos",
              role: "Travel Enthusiast",
              testimonial: "The Bali cultural adventure was transformative. From sunrise at Mount Batur to cooking classes in Ubud, every moment was magical. The local guides shared stories that brought the culture to life.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714030241-mv5r4ifg.jpg",
              imageAlt: "Maria Santos travel testimonial"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Adventure Photographer",
              testimonial: "The African safari exceeded all expectations. Witnessing the Big Five in their natural habitat was breathtaking. The luxury tented camps provided comfort while staying close to nature.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714031428-1rvi5cx5.jpg",
              imageAlt: "David Chen travel testimonial"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Plan Your Trip"
          title="Ready to Explore Your Dream Destination?"
          description="Let our travel experts help you create the perfect itinerary for your next adventure to any of our amazing destinations."
          tagIcon={Send}
          inputPlaceholder="Enter your email to start planning"
          buttonText="Get Trip Ideas"
          termsText="By subscribing, you agree to receive destination guides and travel inspiration. You can unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Chunga-Changa"
          copyrightText="© 2025 Chunga-Changa Travel Agency. All rights reserved."
          columns={[
            {
              title: "Destinations",
              items: [
                { label: "Asia", href: "destinations/asia" },
                { label: "Europe", href: "destinations/europe" },
                { label: "Africa", href: "destinations/africa" },
                { label: "Americas", href: "destinations/americas" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Custom Tours", href: "services/custom" },
                { label: "Group Travel", href: "services/groups" },
                { label: "Corporate Travel", href: "services/corporate" },
                { label: "Travel Insurance", href: "services/insurance" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Travel Tips", href: "blog/tips" },
                { label: "Emergency Help", href: "emergency" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com/chungachanga", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com/chungachanga", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com/chungachanga", ariaLabel: "Twitter" },
            { icon: Youtube, href: "https://youtube.com/chungachanga", ariaLabel: "YouTube" }
          ]}
        />
      </div>
    </>
  );
}