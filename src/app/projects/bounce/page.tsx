import PostLayout from "../PostLayout";
import { bounce } from "@/data/projects";

export default function Bounce() {
  return (
    <PostLayout>
      <div>
        <h1>
          Bounce: From Ideation to Implementation{" "}
          <span style={{ fontStyle: "italic", fontSize: "0.7em" }}>
            (aka the story of how I made an all-in-one college dashboard)
          </span>
        </h1>
        <h2>The Mission</h2>
        <p>
          As a college student, there's a lot to juggle: academics, eating,
          socials, jobs, clubs, the list goes on. With college being the first
          time a lot of students are living on their own, it can be hard to keep
          track of everything. I wanted to create a tool that would help
          students manage their time and tasks, and also help them stay on top
          of their adulting. In a world where time is of the essence, managing
          recipes, groceries, and tasks seamlessly has become a game-changer for
          my productivity. Embark on this journey with me as I delve deeper into
          the creation of Bounce.
        </p>
        <h2>Origin Story</h2>
        <p>
          A couple years ago, during the peak of Covid-19 when everyone was
          discovering new hobbies whilst stuck at home, I got super into
          planning and bullet journaling (which is ironic considering there was
          way less to plan for). During my planning experimentation, I created a
          planner system that worked perfectly for me and the way I think!
        </p>
        <p>
          When I needed to turn back to my digital tools, I decided to digitize
          my planning system through a web app called Bounce.
        </p>
        <h2>The Planning Stage</h2>
        <p>
          Even in these{" "}
          <span style={{ fontStyle: "italic" }}>(very rough)</span> sketches of
          Bounce, the influence of other user interfaces are visible. The plan
          was simple: On the left, there would be a clean and aesthetic iconbar
          to navigate the pages in Bounce. The right portion of the screen is
          reserved for the main content of the page. Initially, Bounce started
          off completedly as a task manager, so the main content in this sketch
          is the task manager.
        </p>

        <h2>Task Prioritization: The Quest for Efficiency</h2>
        <p>
          Leveraging React's useEffect hook and AWS, I architected an automated
          task prioritization system. By factoring in deadlines and task
          duration, Bounce intelligently categorizes and organizes tasks based
          on a <span style={{ fontWeight: "700" }}>"do date"</span> rather than
          a <span style={{ fontWeight: "700" }}>"due date"</span>. Bounce will
          recommend a duration of time that the user should work on that task
          for that day. The ability to edit tasks even after adding them allows
          it to shape to your dynamic lifestyle and sudden changes. After the
          day is over (aka 12 am), each user's list of completed tasks for the
          day is automatically removed to declutter the space and allow the user
          to start the day with a fresh slate (the tasks will also move into
          their new categories!). The integration with AWS DynamoDB as a
          database and Cognito as an authentication service ensures persistent
          storage for users, guaranteeing data consistency across devices and
          sessions.
        </p>
        <h2>Stopwatch: The Time is Ticking</h2>
        <p>
          In the realm of productivity, every second counts, and Bounce's
          Stopwatch feature stands as a testament to this truth. With each task
          receiving its own independent stopwatch, you are able to track how
          much time you have put into each task. With a single click, you can
          play, pause, or stop the stopwatch for a task. When you hit stop, you
          indicate that you are finished with your current working session for
          that task, automatically updating the duration of time you need to
          spend on the task with the amount of time you spent in your work
          session. It is also particularly useful to those that work with the
          Pomodoro Technique, allowing them to monitor the time that has passed.
        </p>
        <h2>Crafting an Intuitive Recipe Dashboard</h2>
        <p>
          As I evaluated my needs before the start of the Fall 2023 semester
          where I would be living in an apartment-style dorm, I decided to add
          the recipe dashboard page to meet my needs since I planned to start
          cooking more. The Recipe Dashboard features a user-friendly interface
          that allows a user to keep track of their inventory of ingredients and
          a database of quick and easy recipes available to each user. There are
          also reminders for the user to restock on items that are low in stock
          in the inventory, keeping the fridge constantly stocked with the
          ingredients you need to prepare your favorite recipes. Through dynamic
          components such as dropdowns, collapsibles, and forms, users can
          effortlessly add new recipes and new ingredients into their inventory.
        </p>
        <h2>Intuitive Dynamic Recipe Sorting</h2>
        <p>
          A standout feature of Bounce is its ability to dynamically sort
          recipes based on available ingredients. Recipes that you have the
          necessary ingredients versus those you do not have the necessary
          ingredients for appear visually different in the list, allowing the
          user to quickly identify the recipes that they can create. For the
          recipes with missing ingredients, the missing ingredients will appear
          in red to make it clear to the user what is missing. Bounce will also
          automatically sort the list to show the recipes that you can make at
          the top of the list, followed by those you require additional
          ingredients for.
        </p>
        <h2>Unveiling the Technology Stack</h2>
        <p>
          Behind the scenes, Bounce harmoniously combines a spectrum of
          technologies. Through REST API, Node.js, AWS services, and TypeScript,
          I established a secure and seamless connection between the front-end
          and back-end, allowing for data preservation. The use of CSS Modules
          for styling and Moment.js for date handling showcases my commitment to
          maintainable and user-centric design. This intricate tapestry of
          technologies culminates in a fluid and engaging user experience.
        </p>
        <h2>The story's not over yet...</h2>
        <p>
          My vision for Bounce has yet to be fulfilled and there are many new
          features to come! Stay tuned for more updates on Bounce through my
          <a href={bounce.githubLink}>GitHub</a> or through this website!
        </p>
        <p>
          {/* The Forge of Technology: Architecting Bounce Beneath the surface,
          Bounce is a symphony of intricate technical elements. The fusion of
          React and TypeScript laid the foundation for a robust front-end,
          ensuring fluid user experiences and bug-free interactions. But the
          true marvel lies in the artful integration with AWS—a realm of cloud
          magic that empowers Bounce's data persistence and global
          accessibility. As I sculpted the back-end architecture, REST APIs
          emerged as the guiding beacons, enabling seamless communication
          between front and back. The Quest for Efficiency: Task Prioritization
          Bounce's potency extends beyond recipes—it harnesses the power of
          prioritization. With a wave of React's wand and TypeScript's spell of
          accuracy, I bestowed Bounce with the ability to automatically
          prioritize tasks based on deadlines and durations. The alchemy of code
          transforms mundane to-do lists into dynamic, agile battle plans,
          ensuring you conquer your tasks with prowess. The Resilience Elixir:
          Real-Time Updates In the realm of real-time data, Bounce stands
          unyielding. The integration of React and AWS forges an unbreakable
          bond, where updates ripple seamlessly across devices. As your
          inventory grows, Bounce's dynamic sorting ensures recipes adapt to
          your resources, fostering creativity and culinary exploration. Unleash
          Your Inner Hero with Bounce As you embark on your daily quests—be they
          mastering new recipes or conquering tasks—let Bounce be your steadfast
          companion. Its technical prowess, forged in the fires of React,
          TypeScript, and AWS, will guide you through the labyrinth of
          organization and productivity. Join the ranks of the efficient, the
          empowered, and the heroic. Embrace Bounce and journey toward a life of
          streamlined efficiency and culinary conquests. */}
        </p>
        {/* [CTA Button: Try Bounce Now] For a deep dive into the code that drives
        Bounce's technological marvel, explore the GitHub repository [GitHub
        Link]. Witness firsthand the intricate algorithms, seamless
        integrations, and meticulous design that define Bounce's DNA. [CTA
        Button: Explore Bounce's GitHub Repository] [CTA Button: Connect with
        Emily on LinkedIn] */}
      </div>
    </PostLayout>
  );
}
