import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, Package, Truck, Coffee, ShoppingBag, Globe, Phone, Mail, MapPin, Box, Leaf, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { QuoteForm } from '@/components/QuoteForm';

function App() {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const content = {
    en: {
      title: "ITQANALMAQAS - Premium Packaging Solutions",
      description: "Professional packaging solutions for shipping, food, and retail industries. Quality kraft paper and cardboard packaging designed for your business needs.",
      nav: {
        home: "Home",
        portfolio: "Portfolio", 
        about: "About",
        contact: "Contact"
      },
      hero: {
        title: "Premium Packaging Solutions",
        subtitle: "Crafting Quality Packaging for Your Business Success",
        description: "We specialize in creating high-quality packaging solutions using premium materials. From shipping boxes to food packaging and retail solutions.",
        cta: "View Our Portfolio"
      },
      portfolio: {
        title: "Our Portfolio",
        subtitle: "Discover our range of packaging solutions",
        shipping: { title: "Shipping Packaging", description: "Durable and secure packaging for safe delivery" },
        food: { title: "Food Packaging", description: "Food-safe packaging that maintains freshness" },
        retail: { title: "Retail Packaging", description: "Eye-catching packaging that enhances your brand" },
        custom: { title: "Custom Packaging", description: "Tailored designs to perfectly fit your unique products" },
        sustainable: { title: "Sustainable Packaging", description: "Eco-friendly options for a greener future" },
        luxury: { title: "Luxury Packaging", description: "Premium finishes for an unforgettable unboxing experience" }
      },
      about: {
        title: "About ITQANALMAQAS",
        description: "We are a leading packaging company dedicated to providing innovative and sustainable packaging solutions. Our expertise ensures your products are protected with an eco-friendly approach."
      },
      contact: {
        title: "Get In Touch",
        phone: "+966-59-439-2374",
        phone2: "+966-54-831-6100",
        email: "Info@itqanalmaqas.com.sa", 
        address: "Saudi Arabia, Riyadh"
      },
      buttons: {
        quote: "Request Quote",
        whatsapp: "WhatsApp"
      },
      form: {
        title: "Request a Quote",
        description: "Fill out the form below and we'll get back to you shortly.",
        fields: { name: "Name", email: "Email", phone: "Phone", message: "Message" },
        buttons: { submit: "Submit", cancel: "Cancel" },
        success: { title: "Quote Request Sent!", description: "We have received your request and will be in touch soon." }
      }
    },
    ar: {
      title: "إتقان المقاس - حلول التغليف المتميزة",
      description: "حلول تغليف مهنية لصناعات الشحن والأغذية والتجزئة. تغليف عالي الجودة مصمم لاحتياجات عملك.",
      nav: {
        home: "الرئيسية",
        portfolio: "أعمالنا",
        about: "من نحن", 
        contact: "اتصل بنا"
      },
      hero: {
        title: "كراتين ... بإتقان يناسب مقاسك!",
        subtitle: "إحنا في اتقان المقاس نوفر لك كل أنواع الكراتين بجودة عالية وتصاميم تناسب شغلك.",
        description: "كراتين شحن متينة؟ ✅\nكراتين فاخرة لمتجرك؟ ✅\nتصميم خاص لك وحدك؟ ✅\nكل اللي تبيه ننفذه لك بأفضل صورة.",
        cta: "اطلع على أعمالنا"
      },
      portfolio: {
        title: "أعمالنا",
        subtitle: "اكتشف مجموعة التغليف لدينا وأكثر!",
        shipping: { title: "📦 كراتين الشحن", description: "قوية وتتحمل." },
        food: { title: "🍱 كراتين الأكل", description: "تغليف آمن للأغذية يحافظ على النظافة والجودة" },
        retail: { title: "🛍️ كراتين المتاجر", description: "أشكال جذابة تبرز علامتك التجارية." },
        sustainable: { title: "🌎كراتين معروفة", description: "كراتين معروفة بالجودة والتصاميم الجذابة." },
        luxury: { title: "✨ كراتين فاخرة", description: "تجربة فتح مميزة تعكس قيمة منتجك." },
        custom: { title: "🎨تصميم خاص؟", description: "عطنا خبر… ونحولها لك لواقع!" }
      },
      about: {
        title: "عن إتقان المقاس",
        description: "إحنا شركة سعودية متخصصة في تصنيع وتوريد الكراتين بالجملة.\nنخدم مختلف القطاعات: مطاعم، متاجر إلكترونية، شركات شحن، محلات تجزئة وغيرهم.\nنقدر نسوي لك تصميم خاص حسب طلبك.\nملتزمين بالجودة والسرعة في التسليم.\nهدفنا نكون شريكك في التغليف ونخلي منتجاتك تبرز وتوصل بأمان."
      },
      contact: {
        title: "تواصل معنا",
        phone: "966-59-439-2374+",
        phone2: "966-54-831-6100+",
        email: "Info@itqanalmaqas.com.sa", 
        address: "المملكة العربية السعودية, الرياض"
      },
      buttons: {
        quote: "طلب عرض سعر",
        whatsapp: "واتساب"
      },
      form: {
        title: "طلب عرض سعر",
        description: "املأ النموذج أدناه وسنعاود الاتصال بك قريبًا.",
        fields: { name: "الاسم", email: "البريد الإلكتروني", phone: "رقم الجوال", message: "تفاصيل طلبك بالمقاسات" },
        buttons: { submit: "إرسال", cancel: "إلغاء" },
        success: { title: "تم إرسال الطلب!", description: "لقد استلمنا طلبك وسنتواصل معك قريبًا." }
      }
    }
  };

  const currentContent = content[language];

  const handleWhatsApp = () => {
    console.log('handleWhatsApp called');
    const url = 'https://wa.me/966594392374';
    console.log('WhatsApp URL:', url);
    
    // Track conversion
    if (typeof window.gtag_report_conversion === 'function') {
      console.log('Calling gtag_report_conversion');
      window.gtag_report_conversion(url);
    } else {
      console.log('gtag_report_conversion not available, opening directly');
      window.open(url, '_blank');
    }
  };
  
  const handleWhatsAppWithMessage = (categoryKey) => {
    const productTitle = currentContent.portfolio[categoryKey]?.title || '';
    const message = language === 'ar'
      ? `مرحبًا، مهتم بمنتج: ${productTitle}. أرسلوا لي التفاصيل والاسعار مشكورين.`
      : `Hello, I'm interested in: ${productTitle}. Please share details and pricing.`;
    const url = `https://wa.me/966594392374?text=${encodeURIComponent(message)}`;
    
    // Track conversion
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(url);
    } else {
      window.open(url, '_blank');
    }
  };
  
  const mapsUrl = 'https://maps.app.goo.gl/XwrVjqTz4ioVfn16A?g_st=aw';
  const handleOpenMaps = () => {
    // Track conversion
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(mapsUrl);
    } else {
      window.open(mapsUrl, '_blank');
    }
  };

  const handlePhoneCall = (phoneNumber) => {
    const url = `tel:${phoneNumber}`;
    // Track conversion
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(url);
    } else {
      window.location.href = url;
    }
  };

  const handleEmail = (email) => {
    const url = `mailto:${email}`;
    // Track conversion
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion(url);
    } else {
      window.location.href = url;
    }
  };
  
  const phoneNumberE164 = '+966594392374';

  const portfolioItems = [
    { category: 'shipping', icon: Truck },
    { category: 'luxury', icon: Gem },
    { category: 'food', icon: Coffee },
    { category: 'retail', icon: ShoppingBag },
    { category: 'sustainable', icon: Gem },
    { category: 'custom', icon: Box },
  ];

  return (
    <>
      <Helmet>
        <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.description} />
        <meta property="og:title" content={currentContent.title} />
        <meta property="og:description" content={currentContent.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="min-h-screen kraft-texture overflow-x-hidden">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md cardboard-shadow"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                variant="outline"
                size="sm"
                className="border-[var(--primary-teal)] text-[var(--primary-teal)] hover:bg-[var(--primary-teal)] hover:text-white"
              >
                <Globe className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
              <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                {Object.entries(currentContent.nav).slice().reverse().map(([key, value]) => (
                  <a 
                    key={key}
                    href={`#${key}`} 
                    className="nav-link text-[var(--dark-teal)] hover:text-[var(--primary-teal)] font-medium transition-colors duration-300"
                  >
                    {value}
                  </a>
                ))}
              </div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-x-3"
              >
                <img 
                  src="/logo-text.png" 
                  alt="ITQAN Text Logo" 
                  className="h-10 sm:h-12 object-contain max-w-full"
                />
                <img 
                  src="/logo-icon.png" 
                  alt="ITQAN Logo Icon" 
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
                
              </motion.div>
            </div>
          </div>
        </motion.nav>

        <section id="home" className="pt-5 min-h-screen flex items-center ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={language === 'ar' ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative order-1 lg:order-2"
              >
                <div className="relative z-10">
                  <img  
                    alt="Premium packaging solutions showcase"
                    className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl cardboard-shadow"
                    src="/images/hero-packaging.jpg" />
                </div>
                <div className="absolute -top-4 left-0 sm:-left-4 w-full h-full bg-[var(--muted-teal)] rounded-2xl -z-10"></div>
              </motion.div>
              <motion.div
                initial={language === 'ar' ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
                  {currentContent.hero.title}
                </h1>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-[var(--dark-teal)] mb-6 font-light">
                  {currentContent.hero.subtitle}
                </h2>
                <p className="text-lg text-[var(--dark-teal)]/80 mb-8 leading-relaxed">
                  {currentContent.hero.description}
                </p>
                <p className="text-md text-[var(--dark-teal)]/90 mb-6 font-bold">
                  {language === 'ar' ? '🚚 والأجمل... التوصيل مجاني داخل الرياض!' : 'Want better? Delivery is free inside Riyadh!'}
                </p>
                <Button 
                  onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                  className="packaging-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {currentContent.hero.cta}
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Offers / Discounts Section */}
<section
  id="offers"
  className="py-12 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-y border-[var(--primary-teal)]/20"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onClick={() => {
        const url = `https://wa.me/966594392374?text=${encodeURIComponent(
          language === 'ar' 
            ? 'أريد الاستفادة من خصم 9.5% الآن بمناسبة اليوم الوطني'
            : 'I want to claim the 9.5% discount for Saudi National Day'
        )}`;
        
        // Track conversion
        if (typeof window.gtag_report_conversion === 'function') {
          window.gtag_report_conversion(url);
        } else {
          window.open(url, '_blank');
        }
      }}
      className="rounded-2xl cardboard-shadow bg-white/80 backdrop-blur p-6 sm:p-8 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        {/* Banner Image */}
        <div className="shrink-0 w-full sm:w-56">
          <img
            src="/images/offers-banner.jpg"
            alt={language === 'ar' ? 'خصم 9.5% - اليوم الوطني السعودي' : '9.5% discount offer - Saudi National Day'}
            className="w-full h-full sm:h-full object-cover rounded-xl cardboard-shadow group-hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Banner Text */}
        <div className="flex-1 w-full text-center sm:text-start">
          <h3 className="text-2xl font-bold text-[var(--dark-teal)] mb-2 group-hover:text-[var(--primary-teal)] transition-colors duration-300">
            {language === 'ar' ? 'عرض اليوم الوطني' : 'Saudi National Day Offer'}
          </h3>
          <p className="text-[var(--dark-teal)]/80 text-lg font-medium mb-1 group-hover:text-[var(--dark-teal)] transition-colors duration-300">
            {language === 'ar'
              ? 'خصم 9.5% على جميع الكراتين بمناسبة اليوم الوطني'
              : 'Celebrate with 9.5% off on all cartons'}
          </p>
          <p className="text-emerald-700 font-bold group-hover:text-emerald-600 transition-colors duration-300">
            {language === 'ar' ? '💚 عزنا بطبعنا 💚' : 'Our pride is in our roots'}
          </p>
        </div>

        {/* WhatsApp Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when button is clicked
            const url = `https://wa.me/966594392374?text=${encodeURIComponent(
              language === 'ar' 
                ? 'أريد الاستفادة من خصم 9.5% الآن بمناسبة اليوم الوطني'
                : 'I want to claim the 9.5% discount for Saudi National Day'
            )}`;
            
            // Track conversion
            if (typeof window.gtag_report_conversion === 'function') {
              window.gtag_report_conversion(url);
            } else {
              window.open(url, '_blank');
            }
          }}
          className="packaging-gradient text-white w-full sm:w-auto mt-3 sm:mt-0 px-6 py-3 text-sm sm:text-base font-semibold hover:shadow-lg transition-all duration-300 shrink-0"
        >
          {language === 'ar' ? 'احجز خصم 9.5%' : 'Claim 9.5% off'}
        </Button>
      </div>
    </motion.div>
  </div>
</section>


        <section id="portfolio" className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
                {currentContent.portfolio.title}
              </h2>
              <p className="text-xl text-[var(--dark-teal)]/80">
                {currentContent.portfolio.subtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.category}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    onClick={() => {
                      const productTitle = currentContent.portfolio[item.category]?.title || '';
                      const message = language === 'ar'
                        ? `مرحبًا، مهتم بمنتج: ${productTitle}. أرسلوا لي التفاصيل والاسعار مشكورين.`
                        : `Hello, I'm interested in: ${productTitle}. Please share details and pricing.`;
                      const url = `https://wa.me/966594392374?text=${encodeURIComponent(message)}`;
                      
                      // Track conversion
                      if (typeof window.gtag_report_conversion === 'function') {
                        window.gtag_report_conversion(url);
                      } else {
                        window.open(url, '_blank');
                      }
                    }}
                    className="portfolio-card rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className="relative h-64">
                      <img  
                        alt={currentContent.portfolio[item.category].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                       src={`/images/portfolio-${item.category}.jpg`} />
                      <div className="absolute top-4 left-4 bg-[var(--primary-teal)] text-white p-3 rounded-full group-hover:bg-[var(--dark-teal)] transition-colors duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-[var(--dark-teal)] mb-3 group-hover:text-[var(--primary-teal)] transition-colors duration-300">
                        {currentContent.portfolio[item.category].title}
                      </h3>
                      <div className="flex items-center justify-between rtl:flex-row-reverse gap-3">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click when button is clicked
                            const productTitle = currentContent.portfolio[item.category]?.title || '';
                            const message = language === 'ar'
                              ? `مرحبًا، مهتم بمنتج: ${productTitle}. أرسلوا لي التفاصيل والاسعار مشكورين.`
                              : `Hello, I'm interested in: ${productTitle}. Please share details and pricing.`;
                            const url = `https://wa.me/966594392374?text=${encodeURIComponent(message)}`;
                            
                            // Track conversion
                            if (typeof window.gtag_report_conversion === 'function') {
                              window.gtag_report_conversion(url);
                            } else {
                              window.open(url, '_blank');
                            }
                          }}
                          className="packaging-gradient text-white px-3 py-2 text-sm font-semibold hover:shadow-md transition-all duration-300 shrink-0"
                        >
                          <MessageCircle className="h-4 w-4 sm:me-2" />
                          <span className="hidden sm:inline">{language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
                        </Button>
                        <p className="text-[var(--dark-teal)]/80 flex-1 text-sm sm:text-base group-hover:text-[var(--dark-teal)] transition-colors duration-300">
                          {currentContent.portfolio[item.category].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={language === 'ar' ? { x: 100, opacity: 0 } : { x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1"
              >
                <img  
                  alt="ITQANALMAQAS packaging facility"
                  className="w-full h-96 object-cover rounded-2xl cardboard-shadow"
                 src="/images/about-facility.jpg" />
              </motion.div>
              <motion.div
                initial={language === 'ar' ? { x: -100, opacity: 0 } : { x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-6">
                  {currentContent.about.title}
                </h2>
                <p className="text-lg text-[var(--dark-teal)]/80 leading-relaxed">
                  {currentContent.about.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gradient mb-8">
                {currentContent.contact.title}
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                <button
                  onClick={() => handlePhoneCall('+966594392374')}
                  className="flex items-center justify-center space-x-4 rtl:space-x-reverse group cursor-pointer"
                  aria-label={language === 'ar' ? 'اتصل الآن' : 'Call now'}
                >
                  <span className="text-lg text-[var(--dark-teal)] group-hover:underline">
                    {currentContent.contact.phone}
                  </span>
                  <Phone className="h-6 w-6 text-[var(--primary-teal)]" />
                </button>
                <button
                  onClick={() => handlePhoneCall('+966548316100')}
                  className="flex items-center justify-center space-x-4 rtl:space-x-reverse group cursor-pointer"
                  aria-label={language === 'ar' ? 'اتصل الآن' : 'Call now'}
                >
                  <span className="text-lg text-[var(--dark-teal)] group-hover:underline">
                    {currentContent.contact.phone2}
                  </span>
                  <Phone className="h-6 w-6 text-[var(--primary-teal)]" />
                </button>
                <button
                  onClick={() => handleEmail(currentContent.contact.email)}
                  className="flex items-center justify-center space-x-4 rtl:space-x-reverse group cursor-pointer"
                  aria-label={language === 'ar' ? 'إرسال بريد إلكتروني' : 'Send email'}
                >
                  <span className="text-lg text-[var(--dark-teal)] group-hover:underline">
                    {currentContent.contact.email}
                  </span>
                  <Mail className="h-6 w-6 text-[var(--primary-teal)]" />
                </button>
                <button
                  onClick={handleOpenMaps}
                  className="flex items-center justify-center space-x-4 rtl:space-x-reverse group cursor-pointer"
                  aria-label={language === 'ar' ? 'افتح العنوان على خرائط قوقل' : 'Open address in Google Maps'}
                >
                  <span className="text-lg text-[var(--dark-teal)] group-hover:underline">
                    {currentContent.contact.address}
                  </span>
                  <MapPin className="h-6 w-6 text-[var(--primary-teal)]" />
                </button>
              </div>
              <div className="mt-8 flex justify-center">
                <Button 
                  onClick={handleOpenMaps}
                  className="packaging-gradient text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {language === 'ar' ? 'زورونا على خرائط قوقل' : 'Open in Google Maps'}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={handleWhatsApp}
          className="floating-button whatsapp-button flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>
        
        <QuoteForm language={language} content={currentContent} />

        <Toaster />
      </div>
    </>
  );
}

export default App;