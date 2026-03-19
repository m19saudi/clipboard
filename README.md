# Online Clipboard

QuickClip is a simple web application that allows users to temporarily store and share text using a unique code. The clipboard content is stored locally in the browser and can be retrieved by entering the code.

## Features

- **Save text**: Enter some text and generate a unique 4-digit code.
- **Retrieve text**: Enter the code to retrieve the saved text.
- **Temporary storage**: The text is saved locally using the browser's `localStorage`, meaning it will persist only until the browser's cache is cleared or the text is retrieved.

## How to Use

1. **Save Text**: 
    - Type or paste your text into the **"Type or paste text here..."** field.
    - Click **Create Code** to generate a unique code for your clipboard content.

2. **Retrieve Text**:
    - Enter the **4-digit code** that was generated when you saved your text.
    - Click **Get Text** to retrieve the content associated with the code.

3. **Note**: The text will remain saved in your browser’s `localStorage` until you clear it or retrieve it with the code.

## Demo

You can check out the live demo of the app on [GitHub Pages](https://yourusername.github.io/online-clipboard/).

## Technologies Used

- **HTML** for the structure.
- **CSS** for basic styling.
- **JavaScript** for logic (handling text saving and retrieving).
- **localStorage** for temporary text storage on the client side.

## How to Contribute

Feel free to fork this repository and submit pull requests if you'd like to contribute improvements, features, or bug fixes.

### Example Ideas for Contribution:
- Add expiration time for saved text.
- Implement better error handling.
- Improve the user interface with modern design.
- Add mobile responsiveness.

## License

This project is open-source and available under the MIT License.
