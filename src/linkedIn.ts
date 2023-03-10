import exportCSVFile from "./exporter";

export type Person = {
  Name: string | undefined,
  Title: string | undefined,
  Connections: string | undefined,
  Company: string | undefined,
}

/**
 * Scrapes the DOM and exports a CSV-formatted list of all employees and your relationship to them
 */
export default function exportLinkedInCompanyEmployees() {
  const people : Person[] = [];

  const headers = {
    Name: "Name",
    Title: "Title",
    Connections: "Connections",
    Company: "Company"
  }

  const companyName = document.getElementsByClassName("org-top-card__primary-content")[0].children[1].children[0].children[0].textContent?.toLowerCase().trim().trimEnd();
  const peopleCardElements = document.getElementsByClassName("org-people-profile-card__profile-info");

  for (let i = 0; i < peopleCardElements.length; i++) {
    const name = peopleCardElements[i].getElementsByClassName("org-people-profile-card__profile-title")[0].textContent?.trim().trimEnd();
    const title = peopleCardElements[i].getElementsByClassName("artdeco-entity-lockup__subtitle")[0].getElementsByClassName("ember-view")[0].textContent?.trim().trimEnd();
    const connections = peopleCardElements[i].children[1].getElementsByClassName("ember-view")[0].textContent?.trim();
    people.push({Name: name, Title: title, Connections: connections, Company: companyName})
  }

  exportCSVFile(headers, people, companyName + "_employees");
}
