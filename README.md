# What Does this Do?
Ever wanted to view all of a company's employees and their titles on a spreadsheet? That's exactly what this Chrome Extension does.

# How to Use
Open the Company Page for the organization you want to investigate. Currently, you will need to scroll down repeatedly to reveal all of the employees in the browser (this will be patched via a puppeteer function if there is need or desire to do so).

Once you've scrolled to the bottom, simply click on the extension's icon in Chrome to render the popup and then press 'Download'.

A CSV will be downloaded of all employees you have revealed including their:
- Name
- Job Title
- Any Connections

You can then import this CSV into your favorite tools such as Google Sheets, Notion, and more.

# Why Did I Make This?
I was curious to see how certain businesses allocate their people, especially in tech. Manually investigating this is pretty time-consuming though. By automatically exporting LinkedIn employees to a CSV file, I can get an understanding of how a company has allocated their workforce (by discipline) in just a few minutes. It's only a rough understanding, and I still need to manually browse the CSV data, but having the ability to sort within a CSV-file makes this process **much** quicker than doing it on LinkedIn.

# Future Features
Three features come to mind:
- Bucketing jobs based on keywords into disciplines, allowing for quicker analysis in the CSV file.
- Automated Scrolling (can be added in a few hours via puppeteer, so if anyone uses this and would like the feature please just let me know)
- Executive Export (export only the executives)
