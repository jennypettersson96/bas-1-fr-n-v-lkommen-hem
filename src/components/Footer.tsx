const Footer = () => (
  <footer className="border-t bg-secondary/60 py-8 sm:py-10">
    <div className="container text-center text-sm text-muted-foreground">
      <p>
        <span className="font-display text-lg italic font-medium text-foreground">JP's trådar</span>
        <br className="sm:hidden" />
        <span className="sm:ml-2">&copy; {new Date().getFullYear()} Alla rättigheter förbehållna.</span>
      </p>
    </div>
  </footer>
);

export default Footer;
