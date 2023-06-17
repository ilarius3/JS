class JobOffers {
    constructor(employer, position) {
      this.employer = employer;
      this.position = position;
      this.jobCandidates = [];
    }
  
    jobApplication(candidates) {
      candidates.forEach((candidate) => {
        const [name, education, yearsExperience] = candidate.split("-");
        const existingCandidate = this.jobCandidates.find(
          (c) => c.name === name
        );
        if (existingCandidate) {
          if (parseInt(yearsExperience) > existingCandidate.yearsExperience) {
            existingCandidate.yearsExperience = parseInt(yearsExperience);
          }
        } else {
          this.jobCandidates.push({
            name: name,
            education: education,
            yearsExperience: parseInt(yearsExperience),
          });
        }
      });
  
      return `You successfully added candidates.`;
    }
  
    jobOffer(chosenPerson) {
      const [name, minimalExperience] = chosenPerson.split("-");
      const candidate = this.jobCandidates.find((c) => c.name === name);
  
      if (!candidate) {
        throw new Error(`${name} is not in the candidates list!`);
      }
  
      if (candidate.yearsExperience < parseInt(minimalExperience)) {
        throw new Error(
          `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
        );
      }
  
      candidate.yearsExperience = "hired";
      return `Welcome aboard, our newest employee is ${name}.`;
    }
  
    salaryBonus(name) {
      const candidate = this.jobCandidates.find((c) => c.name === name);
  
      if (!candidate) {
        throw new Error(`${name} is not in the candidates list!`);
      }
  
      let salary = 40000;
      if (candidate.education === "Bachelor") {
        salary = 50000;
      } else if (candidate.education === "Master") {
        salary = 60000;
      }
  
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $${salary} per year!`;
    }
  
    candidatesDatabase() {
      if (this.jobCandidates.length === 0) {
        throw new Error("Candidate Database is empty!");
      }
  
      const sortedCandidates = this.jobCandidates.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
  
      const candidateNames = sortedCandidates.map((c) => c.name).join(", ");
  
      return `Candidates list: ${candidateNames}.`;
    }
  }
  
  let Jobs = new JobOffers("Google", "Strategy Analyst");
  
  console.log(
    Jobs.jobApplication([
      "John Doe-Bachelor-10",
      "Peter Parker-Master-5",
      "Daniel Jones-Bachelor-18",
      "Jordan Cole-High School-5",
    ])
  );
  console.log(Jobs.jobOffer("John Doe-8"));
  console.log(Jobs.jobOffer("Peter Parker-4"));
  console.log(Jobs.jobOffer("Daniel Jones-15"));
  console.log(Jobs.salaryBonus("John Doe"));
  console.log(Jobs.salaryBonus("Peter Parker"));
  console.log(Jobs.candidatesDatabase());
  // 75/100
