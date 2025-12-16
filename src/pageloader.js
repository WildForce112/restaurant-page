export function HomePageLoad() {
  const PageContent = document.querySelector("#content")
  
  const RestaurantName = document.createElement("h1");
  RestaurantName.textContent = "William's Tacos"
  PageContent.appendChild(RestaurantName);

  const quoteContainer = document.createElement('div')
  quoteContainer.id = "quote-container";
  const quote = document.createElement('p');
  quote.id = "quote";
  quote.textContent = `Tacos are like what the voices of a hundred angels singing Bob Dylan while sitting on rainbows and playing banjos would taste like if that sound were edible.`
  quoteContainer.appendChild(quote);
  const quoteAuthor = document.createElement('h4');
  quoteAuthor.id = "quote-author";
  quoteAuthor.textContent = "- Isabel Quintero";
  quoteContainer.appendChild(quoteAuthor);
  PageContent.appendChild(quoteContainer);

  const hours = [
    "Monday: 7am-9pm",
    "Tuesday: 7am-9pm",
    "Wednesday: 7am-9pm",
    "Thursday: 7am-9pm",
    "Friday: 7am-9pm",
    "Saturday: 7am-9pm",
    "Sunday: 7am-11pm",
  ]
  const openHours = document.createElement('div');
  openHours.id = 'open-hour'
  const openHoursText = document.createElement('h3');
  openHoursText.textContent = "Open Hours";
  openHours.appendChild(openHoursText);
  hours.forEach((hour) => {
    const day = document.createElement('p');
    day.textContent = hour;
    openHours.append(day);
  })
  PageContent.appendChild(openHours);

  const location = document.createElement('div');
  location.id = 'location';
  const locationHeadline = document.createElement('h3');
  locationHeadline.textContent = "Location";
  location.appendChild(locationHeadline);
  location.appendChild(document.createTextNode("112 Red Coast Avenue, New York City"))
  PageContent.appendChild(location);
}

export function MenuPageLoad() {
  const PageContent = document.querySelector("#content")

  const MenuText = document.createElement("h1");
  MenuText.textContent = "Menu"
  PageContent.appendChild(MenuText);

  const category = [
    ["Tacos", [
      ["Chicken Taco", "3.00"],
      ["Beef Taco", "3.50"],
      ["Pork Taco", "3.50"],
      ["Veggie Taco", "2.50"],
    ]],
    ["Burritos", [
      ["Chicken Burrito", "7.00"],
      ["Beef Burrito", "7.50"],
      ["Veggie Burrito", "6.50"],
    ]],
    ["Sides", [
      ["Chips & Salsa", "2.50"],
      ["Chips & Guacamole", "3.50"],
    ]],
    ["Soft Drinks", [
      ["Soft Drink", "2.00"],
      ["Water", "1.50"],
    ]]
  ]
  category.forEach(([cate, dishes]) => {
    const display = document.createElement('div');
    display.className = "category";
    const categoryText = document.createElement('h2');
    categoryText.textContent = cate;
    display.appendChild(categoryText);
    dishes.forEach(([dish, price]) => {
      const dishDisplay = document.createElement('p');
      dishDisplay.className = "dish";
      dishDisplay.textContent = `${dish} - ${price}`;
      display.appendChild(dishDisplay);
    });
    PageContent.appendChild(display);
  })
}

export function AboutPageLoad() {
  const PageContent = document.querySelector("#content");
}