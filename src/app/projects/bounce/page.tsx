import Image from "next/image";
import PostLayout from "../PostLayout";
import { bounce } from "@/data/projects";
import profile from "@/data/profile";
import SideBySide, { SideBySideLayout } from "@/app/components/Side-By-Side";
import utilStyles from "@/styles/utils.module.css";
import CenteredContainer from "@/app/components/CenteredContainer";

export default function Bounce() {
  const horizontalIconBar = (
    <div className={utilStyles.ctaButtonBar}>
      <a
        className={utilStyles.ctaButton}
        href={String(bounce.websiteLink)}
        target="_blank"
      >
        Try Bounce Now →
      </a>
      <a
        className={utilStyles.ctaButton}
        href={bounce.githubLink}
        target="_blank"
      >
        Explore Bounce's Repo →
      </a>
      <a
        className={utilStyles.ctaButton}
        href={profile.linkedin}
        target="_blank"
      >
        Connect with me on LinkedIn →
      </a>
    </div>
  );
  return (
    <PostLayout>
      <div className={utilStyles.thickMargin}>
        <h1>
          Bounce: From Ideation to Implementation{" "}
          <span style={{ fontStyle: "italic", fontSize: "0.7em" }}>
            (aka the story of how I made an all-in-one college dashboard)
          </span>
        </h1>
        {horizontalIconBar}
        <div className={utilStyles.thickMargin}>
          <h2>The Mission</h2>
          <p>
            As a college student, there's a lot to juggle: academics, eating,
            socials, jobs, clubs, the list goes on. With college being the first
            time a lot of students are living on their own, it can be hard to
            keep track of everything. I wanted to create a tool that would help
            students manage their time and tasks, and also help them stay on top
            of their adulting. In a world where time is of the essence, managing
            recipes, groceries, and tasks seamlessly has become a game-changer
            for my productivity. Embark on this journey with me as I delve
            deeper into the creation of Bounce.
          </p>
        </div>

        <SideBySide
          imgSrc={bounce.imgSrc[3]}
          altText={`Image of my paper planner`}
          sectionHeader={["Origin Story"]}
          sectionText={[
            <p>
              A couple years ago, during the peak of Covid-19 when everyone was
              discovering new hobbies whilst stuck at home, I got super into
              planning and bullet journaling (which is ironic considering there
              was way less to plan for). During my planning experimentation, I
              created a planner system that worked perfectly for me and the way
              I think! <br />
              When I needed to turn back to my digital tools, I decided to
              digitize my planning system through a web app called Bounce.
            </p>,
          ]}
          layout={SideBySideLayout.Left}
        />

        <SideBySide
          imgSrc={bounce.imgSrc[2]}
          altText={`Image of early Bounce sketches`}
          sectionHeader={["The Planning Stage"]}
          sectionText={[
            <p>
              Even in these{" "}
              <span style={{ fontStyle: "italic" }}>(very rough)</span> sketches
              of Bounce, the influence of other user interfaces are visible. The
              plan was simple: On the left, there would be a clean and aesthetic
              iconbar to navigate the pages in Bounce. The right portion of the
              screen is reserved for the main content of the page. Initially,
              Bounce started off completedly as a task manager, so the main
              content in this sketch is the task manager.
            </p>,
          ]}
          layout={SideBySideLayout.Right}
        />
      </div>
      <div className={`${utilStyles.horizontalSection}`}>
        <div className={utilStyles.thinMargin}>
          <SideBySide
            imgSrc={bounce.imgSrc[0]}
            altText={`Image of Bounce's task manager`}
            sectionHeader={[
              "Task Prioritization: The Quest for Efficiency",
              "Stopwatch: The Time is Ticking",
            ]}
            sectionText={[
              <p>
                Leveraging React's useEffect hook and AWS, I architected an
                automated task prioritization system. By factoring in deadlines
                and task duration, Bounce intelligently categorizes and
                organizes tasks based on a{" "}
                <span style={{ fontWeight: "700" }}>"do date"</span> rather than
                a <span style={{ fontWeight: "700" }}>"due date"</span>. Bounce
                will recommend a duration of time that the user should work on
                that task for that day. The ability to edit tasks even after
                adding them allows it to shape to your dynamic lifestyle and
                sudden changes. After the day is over (aka 12 am), each user's
                list of completed tasks for the day is automatically removed to
                declutter the space and allow the user to start the day with a
                fresh slate (the tasks will also move into their new
                categories!). The integration with AWS DynamoDB as a database
                and Cognito as an authentication service ensures persistent
                storage for users, guaranteeing data consistency across devices
                and sessions.
              </p>,
              <p>
                In the realm of productivity, every second counts, and Bounce's
                Stopwatch feature stands as a testament to this truth. With each
                task receiving its own independent stopwatch, you are able to
                track how much time you have put into each task. With a single
                click, you can play, pause, or stop the stopwatch for a task.
                When you hit stop, you indicate that you are finished with your
                current working session for that task, automatically updating
                the duration of time you need to spend on the task with the
                amount of time you spent in your work session. It is also
                particularly useful to those that work with the Pomodoro
                Technique, allowing them to monitor the time that has passed.
              </p>,
            ]}
            layout={SideBySideLayout.Left}
          />
        </div>
      </div>
      <div className={utilStyles.thickMargin}>
        <SideBySide
          imgSrc={bounce.imgSrc[1]}
          altText={`Image of Bounce's recipe dashboard`}
          sectionHeader={[
            "Crafting an Intuitive Recipe Dashboard",
            "Intuitive Dynamic Recipe Sorting",
          ]}
          sectionText={[
            <p>
              As I evaluated my needs before the start of the Fall 2023 semester
              where I would be living in an apartment-style dorm, I decided to
              add the recipe dashboard page to meet my needs since I planned to
              start cooking more. The Recipe Dashboard features a user-friendly
              interface that allows a user to keep track of their inventory of
              ingredients and a database of quick and easy recipes available to
              each user. There are also reminders for the user to restock on
              items that are low in stock in the inventory, keeping the fridge
              constantly stocked with the ingredients you need to prepare your
              favorite recipes. Through dynamic components such as dropdowns,
              collapsibles, and forms, users can effortlessly add new recipes
              and new ingredients into their inventory.
            </p>,
            <p>
              A standout feature of Bounce is its ability to dynamically sort
              recipes based on available ingredients. Recipes that you have the
              necessary ingredients versus those you do not have the necessary
              ingredients for appear visually different in the list, allowing
              the user to quickly identify the recipes that they can create. For
              the recipes with missing ingredients, the missing ingredients will
              appear in red to make it clear to the user what is missing. Bounce
              will also automatically sort the list to show the recipes that you
              can make at the top of the list, followed by those you require
              additional ingredients for.
            </p>,
          ]}
          layout={SideBySideLayout.Right}
        />
        <div className={utilStyles.thickMargin}>
          <h2>Unveiling the Technology Stack</h2>
          <p>
            Behind the scenes, Bounce harmoniously combines a spectrum of
            technologies. Through REST API, Node.js, AWS services, and
            TypeScript, I established a secure and seamless connection between
            the front-end and back-end, allowing for data preservation. The use
            of CSS Modules for styling and Moment.js for date handling showcases
            my commitment to maintainable and user-centric design. This
            intricate tapestry of technologies culminates in a fluid and
            engaging user experience.
          </p>
          <CenteredContainer
            sectionHeader="Collaboration"
            sectionText={
              <span>
                <p>
                  When I first embarked on my Bounce journey, I knew it I would
                  need help along the way. Thus, I recruited my software
                  developer friend, Brian Zheng, to help me with some aspects in
                  the development of Bounce and for some feedback. To learn more
                  about his contributions to this project, check out his
                  portfolio! <br />
                </p>
                <div style={{ marginTop: "10px" }}>
                  <a
                    className={utilStyles.secondaryCtaButton}
                    href={
                      "https://portfolio-brianzheng205.vercel.app/projects/bounce#contributions"
                    }
                    target="_blank"
                  >
                    Check Out Brian's Portfolio →
                  </a>
                </div>
              </span>
            }
          />
        </div>

        <div className={utilStyles.thinMargin}>
          <h2>The story's not over yet...</h2>
          <p>
            My vision for Bounce has yet to be fulfilled and there are many new
            features to come! Stay tuned for more updates on Bounce through my{" "}
            <a href={bounce.githubLink}>GitHub</a> or through this website!
          </p>
        </div>
        {horizontalIconBar}
      </div>
    </PostLayout>
  );
}
