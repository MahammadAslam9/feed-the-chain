export const ImpactStats = () => {
  const stats = [
    { number: "2.5M", label: "Meals Served", suffix: "+" },
    { number: "45K", label: "Families Fed", suffix: "+" },
    { number: "150", label: "Partner Locations", suffix: "" },
    { number: "98%", label: "Directly to Families", suffix: "" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-accent to-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Impact Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your generosity creates real change in our community. Here's how we're making a difference together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg shadow-soft">
              <div className="text-4xl lg:text-5xl font-bold text-warm-orange mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};