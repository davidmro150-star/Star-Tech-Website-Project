import Link from "next/link";
import {
  FaArrowLeft,
  FaPhone,
  FaStore,
  FaTruck,
  FaRotate,
  FaMoneyBillWave,
  FaCircleCheck,
} from "react-icons/fa6";

const banglaPolicy = [
  {
    title: "শপ থেকে পণ্য ক্রয়",
    text: (
      <>
        শপ থেকে পণ্য ক্রয়ের ক্ষেত্রে{" "}
        <strong>অবশ্যই শপে বিক্রয়কর্মীর সামনে চেক করে কিনবেন</strong>।
        পরবর্তীতে সমস্যা হলে যদি পণ্যে ওয়ারেন্টি থাকে তবে তা ওয়ারেন্টির
        আওতাভুক্ত হবে।
      </>
    ),
  },
  {
    title: "অনলাইন অর্ডারে মেনুফেকচারিং ত্রুটি",
    text: (
      <>
        অনলাইন অর্ডারের ক্ষেত্রে পণ্য ডেলিভারি পাবার পর পণ্যে মেনুফেকচারিং
        ত্রুটি থাকলে আমাদের{" "}
        <strong>হটলাইনে ২৪ ঘন্টার মধ্যে জানাতে হবে</strong>। তবে অবশ্যই সে
        পণ্যের গায়ে কোন স্ক্র্যাচ ফেলা যাবে না এবং পণ্যের বক্স অক্ষত রাখতে হবে
        অন্যথায় তা পরিবর্তনযোগ্য নয়।
      </>
    ),
  },
  {
    title: "ভুল পণ্য হলে বক্স খুলবেন না",
    text: (
      <>
        অনলাইন অর্ডার এর পণ্য ডেলিভারি ম্যান থেকে রিসিভ করার পর যদি বক্স দেখে
        মনে হয় তা আপনার অর্ডারকৃত পণ্য না তাহলে বক্স খুলে পণ্য ব্যবহার করলে এবং
        বক্স নষ্ট করলে সেই পণ্য পরবর্তীতে পরিবর্তনযোগ্য হবে না।
      </>
    ),
  },
  {
    title: "ত্রুটিযুক্ত পণ্য পরিবর্তন",
    text: (
      <>
        ত্রুটিযুক্ত পণ্য আমাদের শপ থেকে পরিবর্তনযোগ্য। এক্ষেত্রে আমাদের
        এক্সপার্টগন পণ্যে ত্রুটি পর্যবেক্ষণ করে তা পরিবর্তন করার পদক্ষেপ গ্রহণ
        করবেন।
      </>
    ),
  },
  {
    title: "ডেলিভারির মাধ্যমে পরিবর্তন",
    text: (
      <>
        ক্রেতা যদি ডেলিভারি ম্যান এর মাধ্যমে ত্রুটিযুক্ত পণ্য পরিবর্তন করতে
        ইচ্ছুক অথবা পরিবর্তন করতে চান তবে{" "}
        <strong>২০০/- টাকা পরিবর্তন চার্জ</strong> প্রযোজ্য হবে। ঢাকার বাইরের
        ক্ষেত্রে শুধুমাত্র কুরিয়ার চার্জ প্রযোজ্য হবে। পণ্য আনার পর যদি পণ্য{" "}
        <strong>ভাঙ্গা অথবা পোড়া/জ্বলা</strong> অবস্থায় পাওয়া যায় তবে সেই
        পণ্যের সম্পূর্ণ দায়িত্ব ক্রেতাকে বহন করতে হবে।
      </>
    ),
  },
  {
    title: "কম্প্যাটিবিলিটি বা পছন্দ পরিবর্তন",
    text: (
      <>
        স্টার টেক এর ওয়েবসাইটে থাকা বিবরণী দেখে ক্রয়কৃত পণ্য ডেলিভারি কর্মী
        থেকে রিসিভ করার পর তা আপনার নির্দিষ্ট ডিভাইসে সাপোর্ট করছে না অথবা তা
        এখন আর কিনতে ইচ্ছুক নন, এসকল কারণে পণ্য ফেরত অথবা পরিবর্তনযোগ্য নয়।
      </>
    ),
  },
  {
    title: "সফটওয়্যার ও সফটওয়্যার লাইসেন্স",
    text: (
      <>
        কোন ধরণের <strong>সফটওয়্যার/সফটওয়্যার লাইসেন্স</strong> ক্রয়ের পর তা
        রিটার্ন অথবা রিফান্ডযোগ্য নয়।
      </>
    ),
  },
  {
    title: "রিফান্ডের সময়",
    text: (
      <>
        নির্দিষ্ট কারণে পণ্য রিটার্ন দেওয়ার পর অথবা গ্রহণযোগ্য কারণে মূল্য
        রিফান্ড করতে <strong>৩ থেকে ১০ কার্যদিবস</strong> এবং অনলাইন পেমেন্টের
        ক্ষেত্রে আরও বেশি সময় লাগতে পারে।
      </>
    ),
  },
  {
    title: "রিফান্ড চার্জ",
    text: (
      <>
        সকল প্রকার মোবাইল ফিন্যান্সিয়াল সার্ভিস/ অনলাইন গেটওয়ে / POS পেমেন্ট
        রিফান্ডের ক্ষেত্রে <strong>রিফান্ড চার্জ</strong> প্রযোজ্য।
      </>
    ),
  },
  {
    title: "কুরিয়ারে ক্ষতিগ্রস্ত পণ্য",
    text: (
      <>
        কুরিয়ার এর ক্ষেত্রে ক্রেতা অবশ্যই{" "}
        <strong>পণ্য ভাঙ্গা থাকলে অথবা প্যাকেট ছেঁড়া থাকলে কুরিয়ার থেকে পণ্য
        গ্রহণ করবে না</strong>। কুরিয়ারে ক্ষতিগ্রস্ত পণ্য ক্রেতা গ্রহণ করলে তা
        নিজ দায়িত্বে করতে হবে এবং এই ব্যাপারে পরে কোন অভিযোগ গ্রহণযোগ্য হবে
        না।
      </>
    ),
  },
  {
    title: "ক্যাশব্যাক রিফান্ড",
    text: (
      <>
        সম্মানিত ক্রেতাগণ যদি পেমেন্ট করার সময় কোন প্রকার ক্যাশব্যাক পেয়ে
        থাকেন তাহলে রিফান্ড করার সময় ক্যাশব্যাকের সমপরিমাণ টাকা কেটে রাখা
        হবে।
      </>
    ),
  },
];

const englishPolicy = [
  {
    title: "Purchasing Products from Our Shops",
    text: (
      <>
        If a customer is buying the products from our shops, then please make
        sure to <strong>check the products in front of our sellers</strong>.
        Later, if any problems occur then the customer will not be entitled to
        any changes but will be given services based on the product provided a
        description (Warranty).
      </>
    ),
  },
  {
    title: "Manufacturing Defect in Online Orders",
    text: (
      <>
        In the case of ordering online, after receiving the product, if any
        manufacturing issues or problems are noticed or discovered then the
        customer has to{" "}
        <strong>inform us within 24 hours via our hotline service.</strong>{" "}
        However, the product must not be scratched and the product box must be
        intact otherwise it won't be returnable.
      </>
    ),
  },
  {
    title: "Do Not Open the Box for an Incorrect Product",
    text: (
      <>
        After receiving the online order product from the delivery man, if the
        box looks like it is not the product you ordered, then please do not
        open or damage the box. If you open the box and use the product and
        destroy the box, the product will not be returnable.
      </>
    ),
  },
  {
    title: "Replacement of Defective Products",
    text: (
      <>
        If a customer received a manufacturing defective product then the
        customer has to visit any of our shops where our specialists will
        review the product first and then take the necessary steps to change
        the product if it is in need of replacement.
      </>
    ),
  },
  {
    title: "Replacement Through Delivery Service",
    text: (
      <>
        If a customer wants to change the defective product through our
        delivery service, then{" "}
        <strong>a charge of TK. 200/- has to be paid as a replacement
        charge</strong>{" "}
        inside Dhaka and if out of Dhaka, only the Courier charge is
        applicable.
      </>
    ),
  },
  {
    title: "Compatibility or Change of Mind",
    text: (
      <>
        If a Customer is buying any product from our Website after reading the
        description and provided information about the particular product and
        is received successfully without any faults and later if the product
        is not compatible with your setup or if you do not want it anymore,
        then you will not be allowed to change or return the product.
      </>
    ),
  },
  {
    title: "Software and Software License",
    text: (
      <>
        After purchasing a software/software license, a return or refund won't
        be applicable.
      </>
    ),
  },
  {
    title: "Refund Processing Time",
    text: (
      <>
        With specific reasoning, product(s) will be allowed to be returned and
        refunded back to you within <strong>3 to 10 working days</strong> and
        in the case of online purchase, the procedure may take longer to
        execute.
      </>
    ),
  },
  {
    title: "Refund Charges",
    text: (
      <>
        Refund charges are applicable for All kinds of Mobile Financial
        Services / Online Gateway / POS payment refunds.
      </>
    ),
  },
  {
    title: "Damaged Products Through Courier",
    text: (
      <>
        If customers found broken or packet-damaged products then we are
        requesting not to receive the product from the courier service. If the
        customer receives courier damaged product then he/she has to take
        his/her own liability and any kind of complaint won't be acceptable.
      </>
    ),
  },
  {
    title: "Cashback Deduction",
    text: (
      <>
        If the honorable customer gets any cashback at the time of payment,
        the cashback amount will be deducted while making the refund.
      </>
    ),
  },
];

function PolicyItem({ number, title, children }) {
  return (
    <div className="flex gap-4 border-b border-gray-200 py-6 last:border-b-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e21b23] text-sm font-bold text-white">
        {number}
      </div>

      <div>
        <h3 className="mb-2 text-lg font-semibold text-[#17212b]">
          {title}
        </h3>

        <p className="text-[15px] leading-7 text-gray-600">{children}</p>
      </div>
    </div>
  );
}

function SectionHeader({ icon, title, subtitle }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl text-[#e21b23]">
        {icon}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[#17212b]">{title}</h2>

        {subtitle && (
          <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default function RefundReturnPolicyPage() {
  return (
    <main className="bg-[#f7f8fa]">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#e21b23]"
          >
            <FaArrowLeft />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-[#e21b23]">
              <FaRotate />
              Return & Refund Policy
            </div>

            <h1 className="text-3xl font-bold leading-tight text-[#17212b] sm:text-4xl lg:text-5xl">
              স্টার টেক পণ্য রিটার্ন ও রিফান্ড পলিসি
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600">
              পণ্য ক্রয়, রিটার্ন, রিপ্লেসমেন্ট এবং রিফান্ড সংক্রান্ত গুরুত্বপূর্ণ
              নিয়মাবলি নিচে বিস্তারিতভাবে দেওয়া হলো।
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="mx-auto max-w-[1400px] px-4 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-100 bg-red-50 p-5 sm:p-6">
          <div className="flex gap-4">
            <div className="mt-1 shrink-0 text-[#e21b23]">
              <FaCircleCheck size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#17212b]">
                গুরুত্বপূর্ণ তথ্য
              </h2>

              <p className="mt-2 text-sm leading-7 text-gray-600">
                অনলাইন অর্ডারের ক্ষেত্রে পণ্য হাতে পাওয়ার পর পণ্যের অবস্থা,
                বক্স এবং আনুষঙ্গিক বিষয়গুলো ভালোভাবে যাচাই করুন। কোনো
                ম্যানুফেকচারিং ত্রুটি পাওয়া গেলে নির্ধারিত সময়ের মধ্যে আমাদের
                হটলাইনে যোগাযোগ করুন।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bangla Policy */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
          <SectionHeader
            icon={<FaStore />}
            title="রিটার্ন ও রিফান্ড পলিসি"
            subtitle="বাংলা সংস্করণ"
          />

          <div>
            {banglaPolicy.map((item, index) => (
              <PolicyItem
                key={item.title}
                number={index + 1}
                title={item.title}
              >
                {item.text}
              </PolicyItem>
            ))}
          </div>
        </div>
      </section>

      {/* English Policy */}
      <section className="mx-auto max-w-[1400px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
          <SectionHeader
            icon={<FaTruck />}
            title="Return & Refund Policy of Star Tech"
            subtitle="English Version"
          />

          <div>
            {englishPolicy.map((item, index) => (
              <PolicyItem
                key={item.title}
                number={index + 1}
                title={item.title}
              >
                {item.text}
              </PolicyItem>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#17212b] px-5 py-8 text-white sm:px-8 sm:py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <FaPhone className="text-[#e21b23]" />

                <h2 className="text-2xl font-bold">
                  বিস্তারিত জানতে কল করুন
                </h2>
              </div>

              <p className="text-sm leading-6 text-gray-300">
                রিটার্ন, রিপ্লেসমেন্ট অথবা রিফান্ড সংক্রান্ত যেকোনো তথ্যের জন্য
                আমাদের হটলাইনে যোগাযোগ করুন।
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="tel:16793"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#e21b23] px-6 py-3 font-semibold text-white transition hover:bg-[#c91820]"
              >
                <FaPhone />
                16793
              </a>

              <a
                href="tel:09678002003"
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:border-[#e21b23] hover:text-[#e21b23]"
              >
                <FaPhone />
                09678002003
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="mx-auto max-w-[1400px] px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <h3 className="font-bold text-[#17212b]">
              Need more information?
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              অন্যান্য নীতিমালা এবং সার্ভিস সম্পর্কিত তথ্য দেখুন।
            </p>
          </div>

          <Link
            href="/online-delivery"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#e21b23] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c91820]"
          >
            Online Delivery Policy
            <FaArrowLeft className="rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}