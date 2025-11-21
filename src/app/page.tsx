"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Crown, DollarSign, Facebook, Globe, Handshake, HelpCircle, Instagram, Linkedin, MapPin, MessageCircle, Plane, Send, Star, TrendingUp, Twitter, Users, Youtube, Award, Heart } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="medium"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Destinations", id: "destinations" },
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

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Discover Your Perfect Adventure"
          description="Create unforgettable memories with our expertly crafted travel experiences to the world's most breathtaking destinations"
          tag="Travel Agency"
          tagIcon={Plane}
          buttons={[
            { text: "Explore Destinations", href: "destinations" },
            { text: "Plan My Trip", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714020236-l4b9xt5d.jpg"
          imageAlt="Beautiful tropical paradise destination"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          title="Your Journey Starts Here"
          description="At Chunga-Changa, we believe that every journey should be extraordinary. With over 15 years of experience crafting personalized travel experiences, we connect adventurous souls with the world's most incredible destinations."
          tag="About Us"
          tagIcon={MapPin}
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Meet Our Team", href: "team" }
          ]}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714021601-fdhxjs5l.jpg",
            imageAlt: "Travel app showing Bali destinations"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714022825-gu7am372.jpg",
            imageAlt: "Travel app showing Maldives resorts"
          }}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="Why Choose Chunga-Changa"
          description="Experience the difference with our comprehensive travel services designed for the modern explorer"
          tag="Features"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Expert Local Guides",
              description: "Our certified local guides provide authentic cultural insights and hidden gem discoveries that transform your journey into an immersive adventure",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714029024-abqmrh0k.jpg",
              imageAlt: "Local guide showing cultural sites"
            },
            {
              id: 2,
              title: "24/7 Travel Support",
              description: "Round-the-clock assistance ensures your peace of mind with dedicated travel consultants available whenever you need support during your adventure",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714026839-7u27wg9o.jpg",
              imageAlt: "Travel support team helping customers"
            },
            {
              id: 3,
              title: "Customized Itineraries",
              description: "Tailored travel experiences designed around your preferences, budget, and dreams to create the perfect personalized adventure",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714027972-lmkelmbf.jpg",
              imageAlt: "Custom beach vacation itinerary planning"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Popular Destinations"
          description="Discover our most sought-after travel packages to breathtaking destinations around the world"
          tag="Featured Tours"
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
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Travel Packages"
          description="Choose the perfect travel experience that matches your adventure style and budget"
          tag="Pricing"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "explorer",
              price: "$1,299",
              name: "Explorer Package",
              buttons: [
                { text: "Book Now", href: "https://booking.chunga-changa.com/explorer" },
                { text: "Learn More", href: "contact" }
              ],
              features: [
                "7-day guided tour",
                "3-star accommodation",
                "Daily breakfast included",
                "Airport transfers",
                "Travel insurance",
                "24/7 support hotline"
              ]
            },
            {
              id: "adventurer",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$2,199",
              name: "Adventurer Package",
              buttons: [
                { text: "Book Now", href: "https://booking.chunga-changa.com/adventurer" },
                { text: "Chat with Expert", href: "contact" }
              ],
              features: [
                "10-day premium experience",
                "4-star luxury hotels",
                "All meals included",
                "Private transportation",
                "Exclusive activities",
                "Personal travel concierge",
                "Premium travel insurance"
              ]
            },
            {
              id: "luxury",
              price: "$3,999",
              name: "Luxury Package",
              buttons: [
                { text: "Book Now", href: "https://booking.chunga-changa.com/luxury" },
                { text: "Customize", href: "contact" }
              ],
              features: [
                "14-day luxury experience",
                "5-star premium resorts",
                "Gourmet dining experiences",
                "Private jet transfers",
                "Exclusive VIP access",
                "Personal butler service",
                "Comprehensive coverage"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Travel Impact"
          description="Discover the numbers that showcase our commitment to creating extraordinary travel experiences worldwide"
          tag="Our Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Happy Travelers",
              description: "Satisfied customers who have experienced unforgettable journeys with us",
              icon: Users
            },
            {
              id: "2",
              value: "120",
              title: "Destinations",
              description: "Carefully curated destinations across 6 continents",
              icon: MapPin
            },
            {
              id: "3",
              value: "15",
              title: "Years Experience",
              description: "Decades of expertise in crafting exceptional travel experiences",
              icon: Award
            },
            {
              id: "4",
              value: "98%",
              title: "Satisfaction Rate",
              description: "Customer satisfaction rating based on verified reviews",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Travel Experts"
          description="Our passionate team of travel specialists brings decades of experience to craft your perfect adventure"
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sofia Martinez",
              role: "Founder & CEO",
              description: "Former travel blogger with 20+ years exploring remote destinations. Passionate about sustainable tourism and authentic cultural experiences.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714030241-mv5r4ifg.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sofia-martinez" },
                { icon: Instagram, url: "https://instagram.com/sofia_travels" }
              ]
            },
            {
              id: "2",
              name: "Alexander Chen",
              role: "Adventure Specialist",
              description: "Certified mountain guide and expedition leader. Expert in trekking, wildlife safaris, and extreme adventure planning across Asia and Africa.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714031428-1rvi5cx5.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/alexander-chen" },
                { icon: Twitter, url: "https://twitter.com/alex_adventures" }
              ]
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Luxury Travel Curator",
              description: "Specialist in premium destinations and exclusive experiences. Former hospitality executive with expertise in luxury resorts and private tours.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714032644-34bixbdb.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/isabella-rodriguez" },
                { icon: Globe, url: "https://luxurytravel.isabella.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Travelers Say"
          description="Real stories from adventurers who have experienced the magic of Chunga-Changa travel"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Emily Watson",
              role: "Digital Marketing Manager",
              testimonial: "Our Bali adventure exceeded every expectation. The local guides were incredible, the accommodations perfect, and every detail was flawlessly planned. Chunga-Changa made our dream vacation a reality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714030241-mv5r4ifg.jpg",
              imageAlt: "Emily Watson travel testimonial"
            },
            {
              id: "2",
              name: "Michael Thompson",
              role: "Travel Photographer",
              testimonial: "The African safari was absolutely phenomenal. From witnessing the Great Migration to staying in luxury tented camps, every moment was magical. The 24/7 support gave us complete peace of mind.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714031428-1rvi5cx5.jpg",
              imageAlt: "Michael Thompson travel testimonial"
            },
            {
              id: "3",
              name: "Sarah Kim",
              role: "Travel Blogger",
              testimonial: "Chunga-Changa's attention to detail is unmatched. Our Himalayan trek was perfectly organized with experienced guides, comfortable lodges, and breathtaking routes. Truly a once-in-a-lifetime experience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714032644-34bixbdb.jpg",
              imageAlt: "Sarah Kim travel testimonial"
            },
            {
              id: "4",
              name: "James Rodriguez",
              role: "Adventure Enthusiast",
              testimonial: "The Maldives luxury package was pure paradise. Overwater villas, private dining, and crystal-clear waters. The personalized service and exclusive experiences made our honeymoon absolutely perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714033684-3bruab4t.jpg",
              imageAlt: "James Rodriguez travel testimonial"
            },
            {
              id: "5",
              name: "Linda Chen",
              role: "Retired Teacher",
              testimonial: "At 65, I thought my adventuring days were over. Chunga-Changa proved me wrong! Their senior-friendly itineraries and exceptional care made exploring Southeast Asia comfortable and unforgettable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714034766-0789yvof.jpg",
              imageAlt: "Linda Chen travel testimonial"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Travel Partners"
          description="We collaborate with industry leaders to ensure exceptional experiences and reliable service for every journey"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714035867-0td3c48r.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714036966-9voqyy2w.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714038008-eav9mloh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714039138-gjskcsws.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714039995-u0qhhvam.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714041131-730e2k6n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714042288-1tl4nk8g.jpg"
          ]
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about traveling with Chunga-Changa"
          tag="FAQ"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What's included in your travel packages?",
              content: "Our packages typically include accommodation, guided tours, transportation, most meals, and 24/7 support. Specific inclusions vary by destination and package level. All details are clearly outlined in your itinerary."
            },
            {
              id: "2",
              title: "Do you offer customized travel itineraries?",
              content: "Absolutely! We specialize in creating personalized travel experiences. Our expert consultants work with you to design itineraries that match your interests, budget, and travel dates perfectly."
            },
            {
              id: "3",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation policies depending on your package. Most bookings allow free cancellation up to 30 days before departure. Premium packages may have different terms, which we'll explain during booking."
            },
            {
              id: "4",
              title: "Is travel insurance included?",
              content: "Basic travel insurance is included in all our packages. We also offer comprehensive premium insurance options for additional coverage including medical emergencies, trip delays, and adventure activities."
            },
            {
              id: "5",
              title: "How do I prepare for my trip?",
              content: "We provide detailed pre-travel information including packing lists, weather forecasts, cultural tips, and required documents. Our travel consultants are available to help with any specific preparation questions."
            },
            {
              id: "6",
              title: "What if I need help during my trip?",
              content: "Our 24/7 support hotline is always available for assistance. We also have local representatives at most destinations who can provide immediate help with any issues or emergencies that may arise."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Get Started"
          title="Ready for Your Next Adventure?"
          description="Join our community of travelers and be the first to discover new destinations, exclusive deals, and travel inspiration delivered straight to your inbox."
          tagIcon={Send}
          inputPlaceholder="Enter your email address"
          buttonText="Start Planning"
          termsText="By subscribing, you agree to receive travel updates and exclusive offers. You can unsubscribe anytime."
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
    </ThemeProvider>
  );
}