const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Book Your Service",
      description: "Call us or book online to tell us what your car needs and where you are.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "We Come to You",
      description: "Our certified mobile mechanic will arrive at your location at the scheduled time.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-5v9" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Relax, We Fix",
      description: "Your car is fixed with transparency and care, so you can get back to your day.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting your car fixed has never been easier
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="text-center fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white text-2xl font-bold mb-6">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="text-primary mb-6 flex justify-center">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
                {step.description}
              </p>

              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="mechanico-btn-primary">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;