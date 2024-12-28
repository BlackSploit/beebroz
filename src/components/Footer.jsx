const Footer = () => (
  <footer className="py-5 sm:px-10 px-5">
    <div className="screen-max-width">
      <div>
        <p className="font-semibold text-gray text-xs">
          Get in touch via{" "}
          <span className="underline text-blue">
            <a href="https://wa.me/+919633963434" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </span>{" "}
          or{" "}
          <span className="underline text-blue">
            <a href="tel:+919633963434">Call Us</a>
          </span>
          .
        </p>
      </div>

      <div className="bg-neutral-700 my-5 h-[1px] w-full" />

      <div className="flex md:flex-row flex-col md:items-center justify-between">
        <p className="font-semibold text-gray text-xs">
          Copyright @ 2024 Beebroz. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
