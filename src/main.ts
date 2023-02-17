
export default function main() {
  const peopleCardElements = getPeopleCardElements();
  processSingleCard(peopleCardElements[0])
}

function processSingleCard(peopleCard: Element) {
  const personDetailsElement = peopleCard.childNodes[0];
  const personConnectionsElement = peopleCard.childNodes[1];

  console.log(personDetailsElement);
  console.log(personConnectionsElement);
}

function getPeopleCardElements() {
  return document.getElementsByClassName("org-people-profile-card__profile-info");
}
