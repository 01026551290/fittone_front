"use server";

async function CommonFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © 2024 Reddit Clone. All rights reserved.
        </p>
        <nav className="space-x-4">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default CommonFooter;
