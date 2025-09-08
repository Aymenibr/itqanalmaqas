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
        title: "حلول التغليف المتميزة",
        subtitle: "نصنع تغليف عالي الجودة لنجاح أعمالك",
        description: "نحن متخصصون في إنشاء حلول تغليف عالية الجودة باستخدام مواد متميزة. من صناديق الشحن إلى تغليف الأغذية وحلول التجزئة.",
        cta: "اطلع على أعمالنا"
      },
      portfolio: {
        title: "أعمالنا",
        subtitle: "اكتشف مجموعة حلول التغليف لدينا",
        shipping: { title: "تغليف الشحن", description: "حلول تغليف متينة وآمنة لتوصيل المنتجات بأمان" },
        food: { title: "تغليف الأغذية", description: "تغليف آمن للأغذية يحافظ على النضارة والجودة" },
        retail: { title: "تغليف التجزئة", description: "تغليف تجزئة جذاب يعزز علامتك التجارية" },
        custom: { title: "تغليف مخصص", description: "تصاميم مخصصة لتناسب منتجاتك الفريدة تمامًا" },
        sustainable: { title: "تغليف مستدام", description: "خيارات صديقة للبيئة لمستقبل أكثر خضرة" },
        luxury: { title: "تغليف فاخر", description: "لمسات نهائية فاخرة لتجربة فتح صندوق لا تُنسى" }
      },
      about: {
        title: "عن إتقان المقاس",
        description: "نحن شركة تغليف رائدة مكرسة لتوفير حلول تغليف مبتكرة ومستدامة. خبرتنا تضمن حماية منتجاتك مع الحفاظ على نهج صديق للبيئة."
      },
      contact: {
        title: "تواصل معنا",
        phone: "966-59-439-2374+",
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
    window.open('https://wa.me/966594392374', '_blank');
  };

  const portfolioItems = [
    { category: 'shipping', icon: Truck },
    { category: 'food', icon: Coffee },
    { category: 'retail', icon: ShoppingBag },
    { category: 'custom', icon: Box },
    { category: 'sustainable', icon: Leaf },
    { category: 'luxury', icon: Gem }
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
                <Globe className="h-4 w-4 me-2" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
              <div className="hidden md:flex items-center space-x-8">
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
                className="flex items-center space-x-3 rtl:space-x-reverse"
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

        <section id="home" className="pt-16 min-h-screen flex items-center hero-pattern">
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
                   src="https://images.unsplash.com/photo-1648476029943-301781dd76d4" />
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
                    className="portfolio-card rounded-2xl overflow-hidden"
                  >
                    <div className="relative h-64">
                      <img  
                        alt={currentContent.portfolio[item.category].title}
                        className="w-full h-full object-cover"
                       src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                      <div className="absolute top-4 left-4 bg-[var(--primary-teal)] text-white p-3 rounded-full">
                        <IconComponent className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[var(--dark-teal)] mb-3">
                        {currentContent.portfolio[item.category].title}
                      </h3>
                      <p className="text-[var(--dark-teal)]/80">
                        {currentContent.portfolio[item.category].description}
                      </p>
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
                 src="https://images.unsplash.com/photo-1586014972290-6502df0deb85" />
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
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-lg text-[var(--dark-teal)]">{currentContent.contact.phone}</span>
                  <Phone className="h-6 w-6 text-[var(--primary-teal)]" />
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-lg text-[var(--dark-teal)]">{currentContent.contact.email}</span>
                  <Mail className="h-6 w-6 text-[var(--primary-teal)]" />
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-lg text-[var(--dark-teal)]">{currentContent.contact.address}</span>
                  <MapPin className="h-6 w-6 text-[var(--primary-teal)]" />
                </div>
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