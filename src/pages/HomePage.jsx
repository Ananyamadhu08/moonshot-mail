import { useState } from "react";
import { FilterBar, EmailCard, MainEmailSection } from "../components";
function HomePage() {
  const [activeEmail, setActiveEmail] = useState(null);

  const emails = [
    {
      id: "1",
      from: { email: "bounced@flipkart.com", name: "bounced" },
      date: 1582729505000,
      subject: "Lorem Ipsum",
      short_description:
        "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
    },
    {
      id: "2",
      from: { email: "noreply@flipkart.com", name: "noreply" },
      date: 1582728505000,
      subject: "Lorem Ipsum",
      short_description:
        "Aenean ut odio eu risus sollicitudin vehicula volutpat vel ante",
    },
    {
      id: "3",
      from: { email: "yourfriends@flipkart.com", name: "yourfriends" },
      date: 1582727505000,
      subject: "Lorem Ipsum",
      short_description:
        "Nam eget erat accumsan, auctor sapien ut, tempor diam",
    },
    {
      id: "4",
      from: { email: "hello@flipkart.com", name: "hello" },
      date: 1582726505000,
      subject: "Lorem Ipsum",
      short_description: "Morbi eget nunc interdum felis varius tincidunt",
    },
    {
      id: "5",
      from: { email: "howdy@flipkart.com", name: "howdy" },
      date: 1582725505000,
      subject: "Lorem Ipsum",
      short_description:
        "Integer consequat dolor sed justo consequat, id elementum eros facilisis",
    },
    {
      id: "6",
      from: { email: "media@flipkart.com", name: "media" },
      date: 1582724505000,
      subject: "Lorem Ipsum",
      short_description:
        "Pellentesque sed erat pulvinar, ornare elit at, elementum tortor",
    },
    {
      id: "7",
      from: { email: "press@flipkart.com", name: "press" },
      date: 1582724481000,
      subject: "Lorem Ipsum",
      short_description: "Phasellus sagittis metus in gravida posuere",
    },
    {
      id: "8",
      from: { email: "affiliates@flipkart.com", name: "affiliates" },
      date: 1582724433000,
      subject: "Lorem Ipsum",
      short_description: "Nunc tincidunt metus vel enim tempus ultricies",
    },
    {
      id: "9",
      from: { email: "partners@flipkart.com", name: "partners" },
      date: 1582724402000,
      subject: "Lorem Ipsum",
      short_description:
        "Vestibulum viverra dui finibus, rutrum dui luctus, hendrerit odio",
    },
    {
      id: "10",
      from: { email: "domains@flipkart.com", name: "domains" },
      date: 1582724402000,
      subject: "Lorem Ipsum",
      short_description: "Sed vitae est id orci viverra gravida ut at turpis",
    },
  ];

  return (
    <div className="App">
      <section className="home-page-container">
        <FilterBar />

        <div className={activeEmail && "main-section-with-email-body"}>
          <div className="email-container">
            {emails.map((email) => (
              <EmailCard
                email={email}
                key={email.id}
                activeEmail={activeEmail}
                clickHandler={() => setActiveEmail(email)}
              />
            ))}
          </div>

          {activeEmail !== null && <MainEmailSection email={emails[0]} />}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
