import Image from 'next/image';

const Developer = () => {
  return (
     <><section id="About" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-96 overflow-hidden">
            <Image
            width={500}
            height={500}
              alt="content"
              className="object-cover object-center md:h-full md:w-full w-full"
              src="/images/cover.png"
            />
          </div>
      <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"
              >
                <Image src="/images/22X05A0231.jpg" width={80} height={80} className="rounded-full" alt="" />
              </div>
              <div
                className="flex flex-col items-center text-center justify-center"
              >
                <h2 className="font-semibold title-font mt-4 text-gray-900 text-lg">
                T. Yashwanth Kumar
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  My mission is to blend faith, technology, and design to help
                  people grow spiritually and connect with one another.
                </p>
              </div>
            </div>
            <div
              className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"
            >
              <p className="leading-relaxed text-lg mb-4">
                The Final Testament is a unique spiritual companion that brings
                together the inspired sermons of William Marrion Branham—spoken
                under divine revelation during the second coming in the
                cloud—with the complete Holy Bible for reference and study. This
                app is not just a digital book. It is a tool for every believer
                seeking to understand God’s mysteries revealed in the end-time.
                As the final and completing testament, it follows the Old and
                New Testaments to deliver the final message to the Bride of
                Christ. <br />
                This app is open-source, created not for profit but for the
                glory of God. Its sole purpose is to make the final message of
                God&apos;s plan easily accessible to all believers during this
                end-time era.
                <br />
                <br />
                <span className="font-bold"
                  >&quot;Man shall not live by bread alone, but by every word that
                  proceedeth out of the mouth of God.&quot; – Matthew 4:4</span
                >
              </p>
            </div>
          
          </div>
          </div>
          </div>
          </section>

     </>
  );
}

export default Developer