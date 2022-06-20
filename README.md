# Sample Portfolio

Sample Portfolio that can be used to upload and display your projects and social media sites.

## Languages Used

- HTML
- CSS
- JavaScript

## Plugins and Libraries Used

- [Font Awesome](https://fontawesome.com/) 
- [Tiny Slider JS](https://github.com/ganlanyuan/tiny-slider)

## How to Add Project in the Website?
- Open the ```data.js``` file and type the project details using this format:
```js
    {
      image: "",
      name: "",
      description: "",
    }
```
> Note: <br/>
> `image` - this is the actual image of the project. Make sure to check the directory (the directory was read in the HTML File). <br/>
> `name` - actual name of the project. <br/>
> `description` - brief description of the project.

#### Sample Code
```js
const project = [
    {
      image: "src/images/img-1.jpg",
      name: "Project Chaeyoung",
      description: "Project Description here.",
    },
    {
      image: "src/images/img-2.jpg",
      name: "Project Chaeyoung 2",
      description: "Project Description here. 2",
    },
    {
      image: "src/images/img-3.jpg",
      name: "Project Karina",
      description: "Project Description here. 3",
    },
    {
      image: "src/images/img-4.jpg",
      name: "Project Jiwon",
      description: "Project Description here. 4",
    },
  ];
```
## Reference
- [Ania Kubów](https://www.youtube.com/c/AniaKub%C3%B3w)
- [codefoxx](https://www.youtube.com/c/codefoxx)
