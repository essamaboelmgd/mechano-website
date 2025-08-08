const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Professional",
      quote: "I was so relieved to find a mobile mechanic I could trust. They were professional, on time, and explained everything clearly. Highly recommended!",
      avatar: "S"
    },
    {
      name: "Ahmed F.",
      role: "Entrepreneur", 
      quote: "The best service I've ever had! They came to my office and fixed my brakes while I worked. No more wasted weekends at the garage.",
      avatar: "A"
    },
    {
      name: "Fatima R.",
      role: "Busy Mom",
      quote: "My car's check engine light came on, and I was so worried. Mechanico diagnosed it right in my driveway and fixed it on the spot. Lifesavers!",
      avatar: "F"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/30" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from real customers who've experienced our service
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="mechanico-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote */}
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-300 leading-relaxed text-lg italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="text-center mt-16">
          <div className="flex justify-center items-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;