import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DonationCards = () => {
  const donationOptions = [
    {
      amount: "$25",
      impact: "Feeds a family of 4 for one day",
      description: "Provides fresh fruits, vegetables, and protein for a complete meal",
      popular: false
    },
    {
      amount: "$50",
      impact: "Feeds a family of 4 for three days",
      description: "Includes groceries and essentials for multiple nutritious meals",
      popular: true
    },
    {
      amount: "$100",
      impact: "Feeds a family of 4 for one week",
      description: "Complete grocery package with fresh produce, dairy, and proteins",
      popular: false
    },
    {
      amount: "Custom",
      impact: "Every dollar makes a difference",
      description: "Choose your own amount to support families in need",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every donation directly provides meals to families facing food insecurity. 
            Select the option that works best for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationOptions.map((option, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-200 hover:shadow-lg ${
                option.popular ? 'ring-2 ring-warm-orange shadow-warm' : ''
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-warm-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl font-bold text-warm-orange mb-2">
                  {option.amount}
                </CardTitle>
                <p className="text-lg font-semibold text-foreground">
                  {option.impact}
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {option.description}
                </p>
                
                <Button 
                  variant={option.popular ? "hero" : "default"} 
                  className="w-full"
                >
                  Donate {option.amount !== "Custom" ? option.amount : ""}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Your donation is 100% tax-deductible. We are a registered 501(c)(3) nonprofit organization.
          </p>
        </div>
      </div>
    </section>
  );
};