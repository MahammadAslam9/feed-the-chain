export const Footer = () => {
  return (
    <footer className="bg-earth-brown text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-warm-orange mb-4">
              Food Chain Relief
            </h3>
            <p className="text-white/80 leading-relaxed">
              Fighting hunger and building hope in our community through 
              sustainable food relief programs and partnerships.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-warm-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-warm-orange transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-warm-orange transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-warm-orange transition-colors">Impact Reports</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>📧 info@foodchainrelief.org</p>
              <p>📞 (555) 123-FOOD</p>
              <p>📍 123 Community St, City, State 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2024 Food Chain Relief. All rights reserved. | Tax ID: 12-3456789</p>
        </div>
      </div>
    </footer>
  );
};