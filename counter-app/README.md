# Task 5: Counter App

## Description

The Counter App is a simple web application that allows users to increment, decrement, and reset a counter value. This project helps students understand the basics of HTML, CSS, and JavaScript, including working with buttons, handling user interactions, and updating the DOM.

## Screenshots of the Project

![Counter App](./video.mp4)

## Objectives
- To practice creating and structuring an HTML document.
- To apply CSS for styling the web page.
- To use JavaScript for manipulating the DOM and handling user interactions.
- To understand how to create and update dynamic content in JavaScript.

## Technologies Used
- HTML
- CSS
- JavaScript

## Getting Started
Follow these instructions to set up the project on your local machine.

### Prerequisites
- A code editor (e.g., Visual Studio Code)
- A web browser (e.g., Google Chrome)

### Installation

Fork this repository by clicking on the fork button on the top of this page. This will create a copy of this repository in your account. Then follow these steps:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/yourusername/javascript-projects.git
   ```
2. Navigate to the project directory:
   ```sh
   cd counter-app
   ```

## Project Structure

The project files and directories are organized as follows:

```
counter-app/
│
├── index.html       # The main HTML file
├── style.css        # The CSS file for styling
└── src.js           # The JavaScript file for functionality
```

## Usage

1. Open `index.html` in your web browser.
2. Use the "+" button to increment the counter.
3. Use the "-" button to decrement the counter.
4. Use the "Reset" button to reset the counter to zero.

## Code Explanation

### HTML
- The HTML file (`index.html`) contains the basic structure of the web page, including the counter display and buttons for incrementing, decrementing, and resetting the counter.

### CSS
- The CSS file (`style.css`) styles the web page, including the container, counter display, and buttons.

### JavaScript
- The JavaScript file (`src.js`) contains the logic for updating the counter value based on user interactions and updating the DOM to reflect the changes.

## Detailed Steps

### HTML (index.html)
- Create a basic HTML structure with a `<!DOCTYPE html>` declaration.
- Add a `meta` tag for character set and viewport settings.
- Include a `title` tag to set the page title.
- Link the CSS file using the `link` tag.
- Create a `div` container for the main content.
- Inside the container, add an `h1` tag for the title.
- Create a `div` to display the counter value.
- Add buttons for incrementing, decrementing, and resetting the counter.

### CSS (style.css)
- Style the container to center the content and set a max-width.
- Style the counter display for better visibility.
- Style the buttons for a clean and consistent appearance.

### JavaScript (src.js)
- Select the necessary DOM elements (counter display, buttons).
- Add event listeners to the buttons to trigger the counter updates.
- Define functions to increment, decrement, and reset the counter.
- Update the counter display based on the current counter value.

## Submitting the Project

After setting up the project on your local machine and writing the necessary code, follow these steps to submit your project:

1. Create a new folder/directory on your local machine in the `javascript-projects/counter-app` directory. Name it `your-name`.

> For example, if you are using Visual Studio Code, you can create a new folder by clicking on the `New Folder` icon in the `Explorer` sidebar and naming it `counter-app`.
>
> Your folder structure should look like this:
>
> ```
> javascript-projects/
> │
> ├── counter-app/
> │   ├── your-name/
> │   │   ├── index.html
> │   │   ├── style.css
> │   │   └── src.js
> │
> └── ...
> ```

2. Write the necessary code for the project by following the instructions provided in the project description.
3. Once you have completed the project, push your code to the remote repository on GitHub.
   
   3.1 Create a new branch:
   ```sh
   git checkout -b your-branch-name
   ```

    3.2 Stage your changes:
    ```sh
    git add .
    ```

    3.3 Commit the changes:
    ```sh
    git commit -m "Add project files"
    ```

    3.4 Push the changes to the remote repository:
    ```sh
    git push origin your-branch-name
    ```
4. Create a pull request on the original repository.
5. Add a title and description to your pull request.
6. Submit the pull request.
7. Congratulations! You have successfully submitted your project.

## Resources

- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.