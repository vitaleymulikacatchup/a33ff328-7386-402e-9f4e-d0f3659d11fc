"use client";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/ThemeProvider";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/4347478/pexels-photo-4347478.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Colleagues having a team discussion at a contemporary café."},
  {"id":"features-image-1","url":"https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk."},
  {"id":"features-image-2","url":"https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed image of a server rack with glowing lights in a modern data center."},
  {"id":"features-image-3","url":"https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Flatlay of business report with colorful charts, a notebook, and a laptop for data analysis on a desk."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/34326362/pexels-photo-34326362.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful woman organizing envelopes in a modern mailroom setting."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman enjoying remote work at a café, using a laptop and smartphone."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/7793749/pexels-photo-7793749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling businessman with dreadlocks in office, talking on the phone."},
  {"id":"logo-company1","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"logo-company2","url":"https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing."},
  {"id":"logo-company3","url":"https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a black and white Apple logo on a desktop screen with a modern minimalist design."},
  {"id":"logo-company4","url":"https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up view of the Facebook app logo on a digital screen with blurred background."},
  {"id":"logo-company5","url":"https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of the Amazon shopping app icon on a smartphone screen. Ideal for online shopping and technology themes."},
  {"id":"logo-company6","url":"https://images.pexels.com/photos/5207507/pexels-photo-5207507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed image of a remote control featuring streaming service buttons."},
  {"id":"logo-company7","url":"https://images.pexels.com/photos/31113917/pexels-photo-31113917.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Blurred close-up of vibrant app icons on a smartphone screen showcasing Spotify and more."}
];

const resolveAsset = (id) => {
  const asset = assetMap.find(a => a.id === id);
  return asset ? asset.url : "/public/images/placeholder.webp";
};

const resolveAlt = (id) => {
  const asset = assetMap.find(a => a.id === id);
  return asset ? asset.alt : "Decorative image";
};

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SaaS App"
        />
      </div>
      <div id="hero" data-section="hero" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <HeroBillboard
            title="Welcome to Our SaaS Platform"
            description="Create impactful digital experiences with our innovative solutions"
            imageSrc={resolveAsset('hero-image')}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TextAbout
            title="We build tools that empower businesses to reach their full potential"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FeatureCardOne
            title="Powerful Features"
            description="Explore the capabilities that set us apart"
            features={[
              {
                title: "Advanced Analytics",
                description: "Gain deep insights into your data with our intuitive analytics tools",
                imageSrc: resolveAsset('features-image-1')
              },
              {
                title: "Cloud Integration",
                description: "Seamlessly connect and leverage cloud services",
                imageSrc: resolveAsset('features-image-2')
              },
              {
                title: "Custom Reporting",
                description: "Generate reports tailored to your business needs",
                imageSrc: resolveAsset('features-image-3')
              }
            ]}
          />
        </div>
      </div>
      <div id="socialProof" data-section="socialProof" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <SocialProofOne
            title="Trusted by Leading Companies"
            description="Our clients include some of the most respected names in the industry"
            logos={[
              resolveAsset('logo-company1'),
              resolveAsset('logo-company2'),
              resolveAsset('logo-company3'),
              resolveAsset('logo-company4'),
              resolveAsset('logo-company5'),
              resolveAsset('logo-company6'),
              resolveAsset('logo-company7')
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <TestimonialCardOne
            title="What Our Users Say"
            testimonials={[
              {
                id: "1",
                name: "Sarah Johnson",
                role: "CEO",
                company: "TechCorp",
                rating: 5,
                imageSrc: resolveAsset('testimonial-1')
              },
              {
                id: "2",
                name: "Michael Chen",
                role: "CTO",
                company: "InnovateLab",
                rating: 5,
                imageSrc: resolveAsset('testimonial-2')
              },
              {
                id: "3",
                name: "Emily Rodriguez",
                role: "Marketing Director",
                company: "GrowthCo",
                rating: 5,
                imageSrc: resolveAsset('testimonial-3')
              },
              {
                id: "4",
                name: "David Kim",
                role: "Product Manager",
                company: "StartupXYZ",
                rating: 5,
                imageSrc: resolveAsset('testimonial-4')
              }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <ContactSplit
            tag="Stay Updated"
            title="Subscribe to Our Newsletter"
            description="Join our mailing list for insights and updates."
            imageSrc={resolveAsset('hero-image')}
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className={"scroll-mt-24 "}>
        <div className={"mx-auto px-4 md:px-6 "}>
          <FooterBaseReveal
            columns={[
              {
                title: "Product",
                items: [
                  { label: "Features", href: "features" },
                  { label: "Pricing", href: "pricing" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Careers", href: "https://example.com/careers" }
                ]
              },
              {
                title: "Support",
                items: [
                  { label: "Help Center", href: "https://example.com/support" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            copyrightText="© 2025 SaaS Company"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}