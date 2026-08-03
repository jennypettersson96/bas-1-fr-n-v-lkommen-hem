const Footer = () => (
  <footer className="border-t bg-secondary/60 py-8 sm:py-10">
    <div className="container text-center text-sm text-muted-foreground">
      <p>&copy; {new Date().getFullYear()} JP's trådar. Alla rättigheter förbehållna.</p>
    </div>
  </footer>
);

export default Footer;
