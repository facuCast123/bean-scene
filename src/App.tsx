import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "./components/ui/input";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const coffeeTypes = [
  {
    name: "Cappuccino",
    url: "/coffee/coffee-1.png",
    coffee: "75%",
    milk: "25%",
    price: "4.00",
  },
  {
    name: "Chai Latte",
    url: "/coffee/coffee-2.png",
    coffee: "60%",
    milk: "40%",
    price: "4.50",
  },
  {
    name: "Macchiato",
    url: "/coffee/coffee-3.png",
    coffee: "75%",
    milk: "25%",
    price: "3.50",
  },
  {
    name: "Expresso",
    url: "/coffee/coffee-4.png",
    coffee: "100%",
    milk: "0%",
    price: "3.00",
  },
];

const users = [
  {
    name: "Johnny Thomas",
    job: "Project Manager",
    review:
      "I recently discovered Bean Scene, and I can't get enough! The ambiance is cozy and inviting, perfect for catching up with friends or enjoying a quiet moment. Their signature lattes are rich and expertly crafted, and the baristas always greet you with a smile. Plus, the freshly baked pastries are the perfect complement to any drink. Highly recommend!",
  },
  {
    name: "Caitlynn Fera",
    job: "Corporate Lawyer",
    review:
      "Bean Scene is a hidden gem in the neighborhood! The selection of beans is impressive, showcasing unique blends from around the world. I tried their cold brew, and it was smooth and refreshing—definitely one of the best I've had. The staff is knowledgeable and passionate about coffee, making each visit a delightful experience. I'll be coming back for sure!",
  },
  {
    name: "Matthew Gray",
    job: "Cloud Architect",
    review:
      "I can't say enough good things about Bean Scene! The vibe is relaxed and artistic, with local artwork adorning the walls. Their seasonal specials always surprise me with innovative flavors that keep me coming back. Whether it's a classic espresso or a seasonal mocha, each drink is crafted to perfection. It's become my favorite coffee spot!",
  },
];

function App() {
  const [userImage, setUserImage] = useState<number>();
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    setUserImage(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setUserImage(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <main className="relative mx-auto size-full min-h-screen max-w-[1920px] overflow-hidden">
        <Navbar />

        <div className="size-full font-playfair [&>*]:px-10 [&>*]:md:px-32">
          {/* Hero */}
          <section className="relative flex min-h-screen justify-center bg-[url(/hero.png)] bg-cover bg-center bg-no-repeat py-32 text-white shadow-[inset_0px_0px_75px_55px_#1e1e1e] md:max-h-screen md:bg-top md:py-0">
            <div className="left-1/2 top-1/2 z-10 flex w-11/12 flex-col items-center gap-y-4 text-center md:absolute md:left-auto md:top-[60%] md:-translate-x-0 md:-translate-y-1/2 md:items-start md:gap-y-6 md:text-left">
              <span className="text-xl font-medium tracking-wide">
                We&apos;ve got your morning covered with
              </span>

              <img
                className="w-52 py-4 md:w-80"
                src="/stylized.png"
                alt="Coffee"
              />

              <p className="text-xl tracking-wide md:w-2/5">
                It is best to start your day with a cup of coffee. Discover the
                best flavours coffee you will ever have. We provide the best for
                our customers.
              </p>

              <Button className="shadow-btn w-full rounded-full px-6 font-bold text-black md:w-fit">
                Order Now
              </Button>
            </div>

            <div className="absolute left-1/2 top-1/2 h-[70%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-stone-900 opacity-70 md:hidden" />
          </section>

          {/* Discover */}
          <section className="relative my-20 flex flex-col items-center justify-between md:flex-row">
            <div className="flex flex-col items-center gap-y-8 text-center md:basis-1/2 md:items-start md:text-left">
              <h1 className="text-5xl font-bold text-accent">
                Discover the best coffee
              </h1>

              <p className="text-xl text-muted md:w-5/6">
                Bean Scene is a coffee shop that provides you with quality
                coffee that helps boost your productivity and helps build your
                mood. Having a cup of coffee is good, but having a cup of real
                coffee is greater. There is no doubt that you will enjoy this
                coffee more than others you have ever tasted.
              </p>

              <Button className="shadow-btn z-10 w-full rounded-full px-6 font-bold text-black md:w-fit">
                Learn More
              </Button>
            </div>

            <img
              className="w-[35rem]"
              src="/cups/cup-1.png"
              alt="Coffee beans"
            />

            <motion.img
              transition={{ duration: 1 }}
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute inset-x-0 -bottom-20 hidden md:block"
              src="/blast-1.png"
              alt="Coffee spill"
            />
          </section>

          {/* Coffee Types */}
          <article id="menu">
            <h1 className="mx-auto text-center text-5xl font-bold text-accent">
              Enjoy a new blend of coffee style
            </h1>
            <p className="mx-auto mt-6 text-center text-xl text-muted">
              Explore all flavours of coffee with us. There is always a new cup
              worth experiencing
            </p>

            <div className="mx-auto my-8 flex flex-col gap-12 md:flex-row md:justify-center md:gap-4">
              {coffeeTypes.map((coffee) => (
                <div
                  className="relative flex flex-col items-center gap-y-2 border border-primary/50 bg-primary/10 text-center"
                  key={coffee.name}
                >
                  <img src={coffee.url} alt={coffee.name} />
                  <h2 className="text-xl font-bold text-accent">
                    {coffee.name}
                  </h2>
                  <p>{`${coffee.coffee} coffee | ${coffee.milk} milk`}</p>
                  <span className="pb-6 text-lg font-bold text-accent">
                    {`$${coffee.price}`}
                  </span>

                  <Button className="shadow-btn absolute -bottom-6 left-1/2 z-10 w-fit -translate-x-1/2 rounded-full px-6 font-bold text-black">
                    Order Now
                  </Button>
                </div>
              ))}
            </div>
          </article>

          {/* Why us */}
          <section id="about" className="relative my-20 text-center">
            <h1 className="mx-auto text-5xl font-bold text-accent">
              Why are we different?
            </h1>
            <p className="mx-auto mt-8 text-xl text-muted">
              We don&apos;t just make your coffee, we make your day!
            </p>

            <motion.img
              transition={{ duration: 1 }}
              initial={{ opacity: 0, translateX: 100, scaleX: -1 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute -top-32 right-0 hidden -scale-x-[1] md:block"
              src="/blast-1.png"
              alt="Coffee spill"
            />

            <motion.div
              transition={{ duration: 0.5 }}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
              className="my-10 flex flex-col gap-4 md:flex-row [&>*]:aspect-square [&>*]:basis-1/4 [&>*]:p-8 [&>*]:text-center"
            >
              <motion.div
                variants={item}
                className="flex flex-col items-center justify-center gap-y-4 border border-primary/50 bg-primary/10 hover:bg-primary/40"
              >
                <img src="/icons/icon-1.png" alt="Bean icon" />
                <h2 className="text-2xl font-bold text-accent">
                  Supreme Beans
                </h2>
                <p className="text-xl text-muted">
                  Beans that provide great taste
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col items-center justify-center gap-y-4 border border-primary/50 bg-primary/10 hover:bg-primary/40"
              >
                <img src="/icons/icon-2.png" alt="Medal icon" />
                <h2 className="text-2xl font-bold text-accent">High Quality</h2>
                <p className="text-xl text-muted">
                  We always provide the highest quality
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col items-center justify-center gap-y-4 border border-primary/50 bg-primary/10 hover:bg-primary/40"
              >
                <img src="/icons/icon-3.png" alt="Cup icon" />
                <h2 className="text-2xl font-bold text-accent">
                  Extraordinary
                </h2>
                <p className="text-xl text-muted">
                  Coffee like you&apos;ve never tasted before
                </p>
              </motion.div>

              <motion.div
                variants={item}
                className="flex flex-col items-center justify-center gap-y-4 border border-primary/50 bg-primary/10 hover:bg-primary/40"
              >
                <img src="/icons/icon-4.png" alt="Coin icon" />
                <h2 className="text-2xl font-bold text-accent">
                  Affordable Price
                </h2>
                <p className="text-xl text-muted">
                  Our coffee prices are easy to afford
                </p>
              </motion.div>
            </motion.div>

            <p className="mx-auto mt-6 text-xl text-muted">
              Great ideas start with great coffee, Lets help you achieve that
            </p>
            <h4 className="mt-2 text-3xl font-bold text-accent">
              Get started today.
            </h4>

            <Button className="shadow-btn mt-6 w-full rounded-full px-8 font-bold text-black md:w-fit">
              Join us
            </Button>
          </section>

          {/* Order banner */}
          <article className="relative h-[574px] overflow-hidden bg-[url(/backdrop-1.png)] bg-cover bg-no-repeat">
            <div className="absolute left-0 size-full bg-accent/70" />

            <motion.img
              transition={{ duration: 1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute right-0 hidden md:block"
              src="/beans.png"
              alt="Coffee beans"
            />

            <motion.img
              initial={{ translateY: `${-50}%` }}
              whileInView={{
                rotate: [0, 10, -10, 10, 0],
                translateY: `${-50}%`,
              }}
              transition={{
                repeat: Infinity,
                repeatDelay: 1,
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute right-32 top-1/2 hidden -translate-y-1/2 md:block"
              src="/cups/cup-2.png"
              alt="Coffee cup"
            />

            <motion.div
              transition={{ duration: 1 }}
              initial={{ opacity: 0, translateX: -100, translateY: `${-50}%` }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute left-1/2 top-1/2 z-20 w-[90%] -translate-x-1/2 -translate-y-1/2 space-y-8 text-center text-white md:left-auto md:w-2/5 md:-translate-x-0 md:text-left"
            >
              <h1 className="text-5xl font-bold">
                Get a chance to have an Amazing morning
              </h1>

              <p className="text-xl">
                We are giving you are one time opportunity to experience a
                better life with coffee.
              </p>

              <Button className="shadow-btn rounded-full px-8 font-bold text-black">
                Order Now
              </Button>
            </motion.div>
          </article>

          {/* Reviews */}
          <article className="relative mb-32 mt-20 text-center">
            <h1 className="mx-auto text-5xl font-bold text-accent">
              Our coffee perfection feedback
            </h1>
            <p className="mx-auto mt-6 text-xl text-muted">
              Our customers have amazing things to say about us
            </p>

            <motion.div
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative mt-16 border border-primary/40 bg-primary/10 p-4 text-center md:px-20 md:py-32"
            >
              <img
                className="absolute left-10 top-10 hidden md:block"
                src="/quotes.png"
                alt="Quotes"
              />

              <Carousel setApi={setApi}>
                <CarouselContent>
                  {users.map((user) => (
                    <CarouselItem key={user.name}>
                      <div className="relative flex flex-col items-center gap-y-6">
                        <p className="w-[80%] text-lg font-semibold text-muted">
                          {user.review}
                        </p>

                        <h2 className="text-4xl font-bold text-accent">
                          {user.name}
                        </h2>

                        <span className="mb-8 text-xl text-muted md:mb-0">
                          {user.job}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="size-16 rounded-xl bg-primary text-2xl text-accent hover:bg-primary/90 md:-left-28 [&>*]:size-6" />
                <CarouselNext className="size-16 rounded-xl bg-primary text-2xl text-accent hover:bg-primary/90 md:-right-28 [&>*]:size-6" />
              </Carousel>

              <img
                className="absolute -bottom-10 left-1/2 z-10 size-20 -translate-x-1/2 rounded-2xl object-cover object-center md:-bottom-14 md:size-32"
                src={`/users/user-${userImage}.jpg`}
                alt="Profile picture"
              />
            </motion.div>

            <motion.img
              transition={{ duration: 1 }}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute right-0 top-0 hidden md:block"
              src="/blast-2.png"
              alt="Coffe spill"
            />

            <motion.img
              transition={{ duration: 1 }}
              initial={{ opacity: 0, translateX: -100, scale: -1 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute -bottom-24 left-0 hidden -scale-[1] md:block"
              src="/blast-2.png"
              alt="Coffe spill"
            />
          </article>

          {/* Newsletter */}
          <article
            id="contact"
            className="relative h-[374px] bg-[url(/backdrop-1.png)] bg-cover bg-center bg-no-repeat"
          >
            <div className="absolute left-0 size-full bg-accent/70" />

            <motion.div
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0, translateY: -100, translateX: `${-50}%` }}
              whileInView={{ opacity: 1, translateY: `${-50}%` }}
              viewport={{ once: true, amount: 0.5 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 text-center"
            >
              <h1 className="text-3xl font-bold text-white md:text-5xl">
                Subscribe to get the Latest News
              </h1>
              <p className="text-lg text-white md:text-xl">
                Don&apos;t miss out on our latest news, updates, tips and
                special offers
              </p>

              <div className="flex items-center px-12 [&>*]:py-8">
                <Input
                  placeholder="Enter your mail"
                  className="min-w-32 rounded-r-none border-none placeholder:text-xl focus-visible:ring-primary"
                />
                <Button className="shadow-btn rounded-sm rounded-l-none text-xl font-bold text-accent">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

// Framer motion animations
const container = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -50 },
};
