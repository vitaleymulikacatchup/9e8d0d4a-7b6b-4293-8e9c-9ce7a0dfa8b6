"use client"

import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Globe, Instagram, Linkedin, MapPin, Send, TrendingUp, Twitter, Users, Youtube } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "/" },
            { name: "Destinations", id: "destinations" },
            { name: "Tours", id: "tours" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Chunga-Changa"
          button={{
            text: "Book Now",
            href: "https://booking.chunga-changa.com"
          }}
        />
      </div>

      <div id="about-story" data-section="about-story">
        <AboutPhoneTimeline
          title="Our Story: 15 Years of Adventure"
          description="Founded in 2010 by a group of passionate travelers, Chunga-Changa started as a small adventure company with a big dream: to make extraordinary travel accessible to everyone. Today, we're proud to be a leading travel agency that has helped over 50,000 travelers create unforgettable memories across 120+ destinations worldwide."
          tag="Our Journey"
          tagIcon={MapPin}
          buttons={[
            { text: "Our Mission", href: "#mission" },
            { text: "Meet Our Founders", href: "#team" }
          ]}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714021601-fdhxjs5l.jpg",
            imageAlt: "Early days company photo in Bali"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714025784-2nv8zj4l.jpg",
            imageAlt: "Team expedition in the Himalayas"
          }}
        />
      </div>

      <div id="company-metrics" data-section="company-metrics">
        <MetricCardOne
          title="Our Impact in Numbers"
          description="These numbers represent more than statistics—they represent dreams fulfilled, adventures shared, and memories created around the world"
          tag="Company Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "Happy Travelers",
              description: "Satisfied customers who have experienced unforgettable journeys with us since 2010",
              icon: Users
            },
            {
              id: "2",
              value: "120+",
              title: "Destinations",
              description: "Carefully curated destinations across all 7 continents, from bustling cities to remote wilderness",
              icon: MapPin
            },
            {
              id: "3",
              value: "15",
              title: "Years Experience",
              description: "Over a decade of expertise in crafting exceptional travel experiences and building lasting relationships",
              icon: Users
            },
            {
              id: "4",
              value: "98%",
              title: "Satisfaction Rate",
              description: "Customer satisfaction rating based on thousands of verified reviews and repeat bookings",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="leadership-team" data-section="leadership-team">
        <TeamCardTwo
          title="Meet Our Leadership Team"
          description="Our diverse team of travel experts, adventure specialists, and customer service professionals are united by one passion: creating extraordinary travel experiences"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Sofia Martinez",
              role: "Founder & CEO",
              description: "Former travel blogger with 20+ years exploring remote destinations. Sofia founded Chunga-Changa with a vision to make authentic travel experiences accessible to everyone. Passionate about sustainable tourism and cultural preservation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714030241-mv5r4ifg.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sofia-martinez" },
                { icon: Instagram, url: "https://instagram.com/sofia_travels" }
              ]
            },
            {
              id: "2",
              name: "Alexander Chen",
              role: "Chief Adventure Officer",
              description: "Certified mountain guide and expedition leader with expertise in high-altitude trekking, wildlife safaris, and extreme adventure planning. Alexander has led expeditions across Asia, Africa, and South America.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714031428-1rvi5cx5.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/alexander-chen" },
                { icon: Twitter, url: "https://twitter.com/alex_adventures" }
              ]
            },
            {
              id: "3",
              name: "Isabella Rodriguez",
              role: "Director of Luxury Travel",
              description: "Former hospitality executive with over 15 years in luxury resort management. Isabella specializes in curating exclusive experiences, private tours, and premium accommodations for discerning travelers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763714032644-34bixbdb.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/isabella-rodriguez" },
                { icon: Globe, url: "https://luxurytravel.isabella.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Join Our Story"
          title="Ready to Write Your Next Chapter?"
          description="Become part of the Chunga-Changa family and let us help you create your own incredible travel story. Your adventure awaits!"
          tagIcon={Send}
          inputPlaceholder="Enter your email to start your journey"
          buttonText="Begin Adventure"
          termsText="By subscribing, you agree to receive travel inspiration and company updates. You can unsubscribe anytime."
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