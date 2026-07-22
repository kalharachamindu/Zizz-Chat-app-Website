import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Shield, 
  Zap, 
  Download, 
  Smartphone, 
  Users, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const downloadLink = "https://drive.google.com/file/d/1kiHhGM1BQ-Y476u0ZPdVMj92nDOPjiSi/view?usp=sharing";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white font-black text-xl italic">Z</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-800">Zizz</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500 mr-8">
            <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Support</a>
          </div>
          <a 
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-sm font-medium transition-colors text-slate-800"
          >
            <Download className="w-4 h-4" />
            Download Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">Beta Release v1.0</span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
              Talk fast. <br/>
              <span className="text-indigo-600">
                Vibe harder.
              </span>
            </h1>
            
            <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-xl">
              Experience Zizz, the chat app designed for seamless, fast, and secure communication. Stay close to the people who matter most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a 
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-max flex items-center gap-4 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl shadow-2xl shadow-indigo-200 transition-all transform active:scale-95 group"
              >
                <Download className="w-6 h-6" />
                <span className="text-lg font-bold uppercase tracking-wide">Download Zizz APK</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="text-xs text-slate-400 pl-2">Size: 14.2 MB • Supports Android 8.0+</p>

            {/* Social Proof / Stats */}
            <div className="mt-16 flex space-x-12">
              <div>
                <p className="text-2xl font-bold text-slate-800 italic">0.02s</p>
                <p className="text-xs text-slate-400 font-medium uppercase mt-1">Latency</p>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <p className="text-2xl font-bold text-slate-800">AES-256</p>
                <p className="text-xs text-slate-400 font-medium uppercase mt-1">Security</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual / Abstract Phone */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center h-full items-center"
          >
            {/* Abstract Decor */}
            <div className="absolute w-[500px] h-[500px] bg-indigo-100 rounded-full opacity-50 blur-3xl -z-10"></div>
            
            <div className="relative w-[320px] h-[640px] bg-white rounded-[3rem] border-[8px] border-slate-900 p-4 shadow-2xl flex flex-col overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-32 h-full bg-slate-900 rounded-b-2xl"></div>
              </div>
              
              {/* App UI Mockup */}
              <div className="flex-1 bg-slate-50 rounded-[2rem] overflow-hidden flex flex-col relative pt-4">
                {/* Chat Header */}
                <div className="p-4 bg-white border-b border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="h-2 w-16 bg-slate-300 rounded mb-1.5"></div>
                    <div className="h-2 w-24 bg-slate-100 rounded"></div>
                  </div>
                </div>
                
                {/* Chat Bubbles */}
                <div className="flex-1 flex flex-col gap-3 p-4">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="self-start bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 w-3/4 shadow-sm"
                  >
                    <div className="h-2.5 w-full bg-slate-200 rounded mb-2"></div>
                    <div className="h-2.5 w-2/3 bg-slate-200 rounded"></div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="self-end bg-indigo-600 rounded-2xl rounded-tr-none px-4 py-3 w-3/4 shadow-sm"
                  >
                    <div className="h-2.5 w-full bg-indigo-400/50 rounded mb-2"></div>
                    <div className="h-2.5 w-1/2 bg-indigo-400/50 rounded"></div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                    className="self-start bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 w-2/3 shadow-sm"
                  >
                    <div className="h-2.5 w-full bg-slate-200 rounded"></div>
                  </motion.div>
                </div>
                
                {/* Input Area */}
                <div className="p-4 bg-white mt-auto">
                  <div className="h-10 w-full bg-slate-100 rounded-full px-4 flex items-center">
                    <div className="h-2.5 w-24 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-24 p-4 bg-white rounded-2xl border border-slate-50 shadow-xl flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">Installation Ready</p>
                <p className="text-[10px] text-slate-400">Verified & Safe</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-white border-t border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">Why choose Zizz?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Everything you need in a modern chat application, built perfectly for your daily conversations.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-indigo-600" />,
                title: "Incredibly Fast",
                desc: "Messages delivered in the blink of an eye. Optimized for speed even on slow networks."
              },
              {
                icon: <Shield className="w-6 h-6 text-indigo-600" />,
                title: "Secure by Design",
                desc: "Your conversations are private. We use industry-standard security to keep your data safe."
              },
              {
                icon: <Smartphone className="w-6 h-6 text-indigo-600" />,
                title: "Beautiful Interface",
                desc: "A clean, modern, and intuitive design that makes chatting a delightful experience."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-lg hover:border-indigo-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight text-slate-900">Ready to start chatting?</h2>
          <p className="text-xl text-slate-500 mb-10">Join the conversation today. Download Zizz and connect with everyone.</p>
          <a 
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-lg transition-all shadow-xl shadow-indigo-200 transform active:scale-95"
          >
            Get Zizz Now <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Zizz Messaging Labs. Built for performance.</p>
          <div className="flex space-x-4 opacity-50">
            <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
            <div className="w-5 h-5 bg-slate-300 rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
