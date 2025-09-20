import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Fighting Hunger, Building Hope
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over a decade, we've been working tirelessly to ensure that no family 
              in our community goes to bed hungry. Through partnerships with local food 
              banks, grocery stores, and volunteers, we've created a sustainable network 
              of support.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every dollar you donate goes directly to purchasing fresh, nutritious food 
              for families in need. We work with local suppliers to maximize the impact 
              of your generosity, ensuring that your donation feeds as many people as possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="impact" size="lg">
                Learn Our Story
              </Button>
              <Button variant="outline" size="lg">
                Volunteer With Us
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                🌟 Direct Impact
              </h3>
              <p className="text-muted-foreground">
                100% of food donations go directly to families. Administrative costs 
                are covered by separate grants and partnerships.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                🤝 Community Partnerships
              </h3>
              <p className="text-muted-foreground">
                We work with 150+ local businesses, schools, and organizations 
                to identify and support families in need.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                📊 Transparent Operations
              </h3>
              <p className="text-muted-foreground">
                Regular reporting ensures you know exactly how your donation 
                creates positive change in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};