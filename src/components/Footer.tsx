const Footer = () => {
  return (
    <footer className="relative min-h-[500px] border-t border-black bg-accent-foreground bg-[url(/enhanced.png)] bg-cover bg-center bg-no-repeat font-playfair">
      <div className="flex flex-col justify-around gap-y-6 px-10 pb-20 pt-52 text-white md:flex-row [&>*]:flex [&>*]:flex-col">
        <div className="basis-1/4 gap-y-12">
          <img className="w-72" src="/logo.png" alt="Logo" />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="flex w-fit items-center gap-x-6">
            <img
              className="cursor-pointer"
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/facebook/white"
            />

            <img
              className="cursor-pointer"
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/instagram/white"
            />

            <img
              className="cursor-pointer"
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/youtube/white"
            />

            <img
              className="cursor-pointer"
              height="24"
              width="24"
              src="https://cdn.simpleicons.org/x/white"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">About</h1>

          <ul className="mt-12 list-none space-y-4 text-lg [&>*]:w-fit">
            <p className="cursor-pointer underline-offset-4 hover:underline">
              Menu
            </p>
            <p className="cursor-pointer underline-offset-4 hover:underline">
              Features
            </p>
            <p className="cursor-pointer underline-offset-4 hover:underline">
              News & Blogs
            </p>
            <p className="cursor-pointer underline-offset-4 hover:underline">
              Help & Support
            </p>
          </ul>
        </div>

        <div>
          <h1 className="text-2xl font-bold">Company</h1>

          <ul className="mt-12 list-none space-y-4 text-lg [&>*]:w-fit">
            <p className="cursor-pointer underline-offset-4 hover:underline">
              How we work
            </p>
            <p className="cursor-pointer underline-offset-4 hover:underline">
              Terms of service
            </p>
            <p className="cursor-pointer underline-offset-4 hover:underline">
              Pricing
            </p>
            <p className="cursor-pointer underline-offset-4 hover:underline">
              FAQ
            </p>
          </ul>
        </div>

        <div className="basis-1/4">
          <h1 className="text-2xl font-bold">Contact us</h1>

          <ul className="mt-12 list-none space-y-4 text-lg">
            <p>
              Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
              Bangalore-560016
            </p>
            <p>+1 202-918-2132</p>
            <p>beanscene@mail.com</p>
            <p>www.beanscene.com</p>
          </ul>
        </div>
      </div>

      <img
        className="absolute -top-52 left-0 hidden md:block"
        src="/cups/cup-3.png"
        alt="Coffee cup"
      />

      <img
        className="absolute -top-52 right-0 hidden -scale-x-[1] md:block"
        src="/cups/cup-3.png"
        alt="Coffee cup"
      />

      <p className="absolute bottom-10 left-20 text-white">
        Images sourced on Freepik.com
      </p>
    </footer>
  );
};

export default Footer;
