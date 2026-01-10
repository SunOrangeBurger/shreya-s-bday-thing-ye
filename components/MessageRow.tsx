import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { MessageRowProps } from '../types';

const MessageRow: React.FC<MessageRowProps> = ({ messages, title }) => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h3 className="font-['Playfair_Display'] text-[#7F1D1D] text-3xl md:text-4xl italic">
              {title}
            </h3>
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">

          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm border border-[#D4AF37]/30 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <Quote className="text-[#D4AF37] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              <p className="font-['Lato'] text-[#064E3B] text-lg leading-relaxed mb-6 italic">
                "{msg.message}"
              </p>
              <div className="mt-auto">
                <span className="block w-8 h-[1px] bg-[#7F1D1D]/30 mx-auto mb-2"></span>
                <h4 className="font-['Playfair_Display'] text-[#7F1D1D] font-bold text-xl">
                  - {msg.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageRow;
