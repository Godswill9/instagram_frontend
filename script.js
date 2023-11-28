const download = document.querySelector(".downloader");
const download2 = document.querySelector(".downloader2");
const dropdown = document.querySelector(".dropdown-1");
const dropdown2 = document.querySelector(".dropdown-2");
const hamburger = document.querySelector(".hamburger");
const mobile = document.querySelector(".mobile");
const video = document.querySelector(".video");
const photo = document.querySelector(".photo");
const reel = document.querySelector(".reel");
const stories = document.querySelector(".stories");
const igtv = document.querySelector(".igtv");
const Instagramdownloader = document.querySelector(".Instagram-downloader");
const InstagramPhoto = document.querySelector(".Instagram-Photo");
const InstagramReels = document.querySelector(".Instagram-Reels");
const Instagramstory = document.querySelector(".Instagram-story");
const IGTVvideo = document.querySelector(".IGTV-video");
// console.log(download, dropdown);
localStorage.setItem("title", "video");
var title = localStorage.getItem("title");

function setTitle(str) {
  localStorage.setItem("title", str);
  // alert(`you can now download ${str}`);
  // location.reload();
}
download.addEventListener("click", () => {
  dropdown.classList.toggle("show");
});
download2.addEventListener("click", () => {
  dropdown2.classList.toggle("show");
});

hamburger.addEventListener("click", () => {
  mobile.classList.toggle("review");
});

video.addEventListener("click", () => {
  Instagramdownloader.style.display = "block";
  InstagramPhoto.style.display = "none";
  InstagramReels.style.display = "none";
  Instagramstory.style.display = "none";
  IGTVvideo.style.display = "none";
  innerFileCont?.classList.remove("show");
  setTitle("video");
});
photo.addEventListener("click", () => {
  InstagramPhoto.style.display = "block";
  Instagramdownloader.style.display = "none";
  InstagramReels.style.display = "none";
  Instagramstory.style.display = "none";
  IGTVvideo.style.display = "none";
  innerFileCont?.classList.remove("show");
  setTitle("images");
});

reel.addEventListener("click", () => {
  InstagramReels.style.display = "block";
  InstagramPhoto.style.display = "none";
  Instagramdownloader.style.display = "none";
  Instagramstory.style.display = "none";
  IGTVvideo.style.display = "none";
  innerFileCont?.classList.remove("show");
  setTitle("reels");
});
stories.addEventListener("click", () => {
  Instagramstory.style.display = "block";
  InstagramPhoto.style.display = "none";
  Instagramdownloader.style.display = "none";
  InstagramReels.style.display = "none";
  IGTVvideo.style.display = "none";
  innerFileCont?.classList.remove("show");
  setTitle("story");
});
igtv.addEventListener("click", () => {
  IGTVvideo.style.display = "block";
  InstagramPhoto.style.display = "none";
  Instagramdownloader.style.display = "none";
  InstagramReels.style.display = "none";
  Instagramstory.style.display = "none";
  innerFileCont?.classList.remove("show");
  setTitle("igtv");
});

//CODE FOR DOWNLOADING THE INSTAGRAM VIDEO
const fetchLinkButton = document.querySelector(".inner-input button");
const urlInputLink = document.querySelector(".inner-input input ");
const pasteBut1 = document.querySelector(".inner-input .div-cont ");

const getLink = "";
const downloadButton = document.querySelector(
  ".downloadContentSection .file button"
);
const loader = document.querySelector(".downloadContentSection .loader");
const loaderSpan = document.querySelector(
  ".downloadContentSection .loader span"
);
const loader2 = document.querySelector(
  ".downloadContentSection .loader .loader2"
);
const innerFileCont = document.querySelector(".downloadContentSection .inner");
const downloadElem = document.querySelector(".downloadContentSection .file a");

const notice = document.querySelector(".notice");
const noticeMessage = document.querySelector(".notice .message");
const noticeButton = document.querySelector(".notice button");
const wrapper = document.querySelector(".wrapper");

wrapper?.addEventListener("click", () => {
  notice?.classList.remove("show");
  wrapper?.classList.remove("show");
});
noticeButton?.addEventListener("click", () => {
  notice?.classList.remove("show");
  wrapper?.classList.remove("show");
});

// function downloadFile(url) {
//   var link = document.createElement("a");
//   link.href = url;
//   link.setAttribute("download", ""); // This attribute triggers the download behavior
//   link.style.display = "none"; // Hides the link

//   document.body.appendChild(link);
//   link.click();

//   document.body.removeChild(link); // Remove the link from the DOM once the download starts
// }
// function downloadFile(url) {
//   window.open(url, "_blank"); // Opens the URL in a new tab/window
// }

function downloadFile(link, other) {
  if (link.startsWith("http://")) {
    const trimmedLink = link.replace("http:", "");
    console.log(trimmedLink);
    window.location.href = trimmedLink; // Redirects to the secure download link with the trimmed part of the original link
  } else if (link.startsWith("https://")) {
    window.open(link, "_blank"); // Opens the link in a new tab/window
  } else {
    console.error("Invalid link format");
  }
}
// function downloadFile(url, image) {
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "download";
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   setTimeout(() => {
//     finishUp(url, image);
//   }, 10000);
// }

// function open_json(url) {
//   sendUrlTest(url);
// }
// fetchLinkButton.addEventListener("click", () => {
//   if (urlInputLink.value == "") {
//     noticeMessage.textContent = "Empty! Input URL media link";
//     notice.classList.add("show");
//     wrapper.classList.add("show");
//     return;
//   } else {
//     loader.classList.add("show");
//     const payload = {
//       via: "form",
//       ref: "download-audio-instagram",
//       url: urlInputLink.value,
//     };

//     // Convert the payload to a URL-encoded string
//     const formData = new URLSearchParams(payload).toString();

//     // Make a request to your Node.js server
//     fetch("http://localhost:8088/api/instagram", {
//       method: "POST",
//       body: formData,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//         Origin: "http://localhost:5500",
//         Referer: "https://reelsaver.net/en/download-audio-instagram",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         loader.classList.remove("show");
//         console.log("API Response:", data);
//       })
//       .catch((error) => {
//         loader.classList.remove("show");
//         console.error("API Request Error:", error);
//       });
//   }
// });

// fetchLinkButton.addEventListener("click", async () => {
//   var data;
//   loader.classList.add("show");
//   if (urlInputLink.value == "") {
//     alert("empty!");
//     return;
//   } else {
//     fetchAndProcessData(dynamic_url_maker(urlInputLink.value))
//       .then(function (result) {
//         console.log(result);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//     urlInputLink.value = "";
//   }
// });

fetchLinkButton.addEventListener("click", async () => {
  const val = localStorage.getItem("title");
  const inputURL = urlInputLink.value.trim();
  innerFileCont.style.display = "none";

  if (inputURL === "") {
    displayError("Empty! Input URL media link");
    return;
  }

  if (!isValidURL(inputURL)) {
    displayError("Invalid URL media link");
    return;
  }

  try {
    loader2.style.display = "none";
    loaderSpan.style.display = "block";
    loader.classList.add("show");

    if (val === "story") {
      const storyData = await sendStory(inputURL);
      if (storyData.parsedData.data) {
        loader2.style.display = "block";
        loaderSpan.style.display = "none";
        var newArr = extractFromStory(storyData.parsedData.data.items);
        sendReelDetails(newArr, "downloadReel");
      } else {
        noticeMessage.textContent = "Private account or invalid url";
        notice.classList.add("show");
        wrapper.classList.add("show");
        loader.classList.remove("show");
      }
      // Handle story data as needed
      return;
    }

    const responseData = await sendUrlTest(inputURL);
    // console.log(responseData);
    const data = responseData.parsedData;

    if (data.error) {
      displayError("Check the link, refresh and try again");
      throw new Error("Network response was not ok");
    }

    var fileFormat;
    loader2.style.display = "block";
    loaderSpan.style.display = "none";

    loader.classList.remove("show");
    // <img src="http://127.0.0.1:5500/frontend/image%20bank/instaLogo2.png" alt="" />
    // <img src="https://via.placeholder.com/150" alt="" />
    if (data[0] == null) {
      console.log("nothing oo");
      loader.classList.remove("show");
      noticeMessage.textContent = "Choose the required media and try again";
      notice.classList.add("show");
      wrapper.classList.add("show");
      return;
    }
    fileFormat = data
      .map(
        (item, i) => `
    <div class="file">
   <img src="data:image/jpeg;base64,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" alt="" />  
   <div class="wrapper">
        <button class="downloadBut" onclick="downloadFile('${item}', '')">Download</button>
      </div>
    </div>
  `
      )
      .join("");

    innerFileCont.innerHTML = fileFormat;

    innerFileCont.style.display = "flex";

    // switch (val) {
    //   case "video":
    //     getVid(data);
    //     break;
    //   case "images":
    //     getImage(data);
    //     break;
    //   case "reels":
    //     getReels(data);
    //     break;
    //   case "igtv":
    //     getIGTV(data);
    //     break;
    //   default:
    //     // Handle other cases if needed
    //     break;
    // }
  } catch (error) {
    loader.classList.remove("show");
    console.error(error);
    throw error; // Rethrow the error to be caught in your original code
  }
});

function isValidURL(url) {
  const re =
    /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  return re.test(url.replace(/ /g, ""));
}

function displayError(message) {
  noticeMessage.textContent = message;
  notice.classList.add("show");
  wrapper.classList.add("show");
}

function renderFileHTML(fileUrl, fileCover, type = "") {
  var fileFormat;

  if (type === "") {
    // <img src="${fileCover}" alt="" />
    fileFormat = `
      <div class="file">
       <img src="data:image/jpeg;base64,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" alt="" />  
        <div class="wrapper">
          <button class="downloadBut" onclick="downloadFile('${fileUrl}', '${fileCover}')">Download</button>
        </div>
      </div>
    `;
  } else {
    // <img src="${item.cloudinaryThumbnailURL}" alt="" />
    fileFormat = type
      .map(
        (item, i) => `
      <div class="file">
       <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AfwMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABwUGAgMEAQj/xABMEAABAwICAwoHCwoHAQAAAAABAAIDBAUGESExQQcSExRRYXGBkaEWIlJVk7GyFSUyN1NldJSz0dIkQmJkcnWCg8HwJjM1VGOi4SP/xAAbAQACAwEBAQAAAAAAAAAAAAAABAMFBgIBB//EAD4RAAIBAgIHAgoIBgMAAAAAAAABAgMEBRESEyExQVFxgbEUIjIzQlJhkcHRBiMkNENioeElNURygvAVU/H/2gAMAwEAAhEDEQA/AHigAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgDzNAHHU3a3Ujt7VV1NE7yXytB7F0oSe5HapzluRo8I7L50pPShdqhVfos91U+QeEVl86UnpQvfB6vqs81cuR54R2TzrR+lCPB6vqsNXLkHhLY/OtH6YLzUVfVYauXI88JbH52ovTNXuoq+qw1cuQeE1i870XpmrzUVfVYauXI7aS4UdaM6OrgnA+SkDvUuJRlHesjlpredIOa5PAQAIAEACABAHFd7nSWihkrK6URxM7XHYANpKCWjRnWmoQW0UmIMaXO8yubFI+ko9TYY3ZEj9Jw0noGjp1qemoo0VHDaVFbdsiAaeTpKdhMknAza8DWUzGQrOmzPMHaO1MxeYrKLRicuUdq6yODA5coRkwNbsuUIyYGBAK8DaYtL4pBJE90cg1PYcnDoK8aT2M8ZdsK7oNXRSspr5I6ppToE5GckfTl8Id/Sq+4sVJaVPY+QvUoJ7YjWhljniZLC9skb2hzXtOYcDqIKqmstjFDNeACABAHh0IASu6Df33e+ywMf+SUbzFG0anOGhzu3MDmHOoXUTeSNphNjqLdTa8aW19OC+JXqdklRNHDBG6SWRwaxjRmXHkCmhIbqqMIuUtiQy8ObnkEUQqL88yS5Z8Xjdkxg/ScNJPRkOlS61rYjL3WJub0aKyXPiS5uWDbcTC19taW6CIow/LpIBRlUltE9TdT8ZpgMRYR+VpPqx/Cu1SrPdmeO2uFvTMvCHCXylJ9WP4V1qLh8GcOjWW9AcQYS8uk+rH8K98GueTPNXVMTiHCO2Sj+rH8KPBrnkw1dUBW4Nup4Fxtr3O0ASRhhPQSB3Lxwuae3ajzRqx2kJiTc6iMb6mwvLXgZ8Vkdm137LtYPTn1KejfvPKp7ySFfhIWssb43uZIxzHtJa5rhkWkawQrVNNZoaQxNym+v38tkqH5tAMtNns8pvfmOtVd/Ry+sXaK14ekMtVosCABAHLdJzS22qqBrihe8dQJXMnlFskow1lSMObSPnBryRvnEknSSdqroTPqM6aWxDS3KLExtI+91LQZJC6Onz/NaNDndJOY6Bzp6luzMZj903U8HjuW19SBxriye81ktJSSlltjdvQGnLhztc7m5B19E0ZIZsMMjQgpzWc3+hWWlMwmNzgbGlMwmKTgbGuTUJik4GetMqWYtKORi4Lo4OintVfWU8k9LRTzQx6HPYwkBRyqwg8m8mcucU8myw4HxVNbqqK31spkoJSGsc458CTqyPk8o2a+lO7tYzi5w395DVpJrNbzv3U7ExvBXmnZk5zhFUADX5Lu7LsUWH1nnq32HNvP0WU7Cs5pMTWyZpyIqWM6neKe5yduY6VKSJqizgx9rPleCABAEdiL/QLl9Fk9krip5DGbP7zT6rvPnNrsgqWM8j6tKOY7pibZuZZ053rmWwb0jWC5uvvVwno0l0PmyWvxXxuM/iJlhyACjhM2s4G5rkzCYpOBtiDnvaxjXOe45Na0ZknmCahMUqRSWbLJRYMv9UwPFFwLTq4aQNJ6tfcpVcRjvKmreUIvLPMzqsG36kZvzR8K0a+BeHEdWtMU7unnvF/CaM+JCPa5jnMe1zXNORa4ZEHnCfjJSWw8a4ovuF8YWu22GKlrGysmpwQGsZnwmknMc+nbkqy5sqk6rlHcxKpRlKWaKBWyCpqp5uDEYlkc/eDU3M55KzgtGKXIaSyWQ1Lo43Lc3dPPpfJbmTEnyg0Oz7QqSmtC6yXPISjsq9oq7MPfu2/TIfbarir5uXR9w5LyWfQCzhWggAQBH4hGdhuI/VpPZKjq+Q+gxZ/eKfVd587zw70EhZ6Msz6tCebHTeviyd+7Y/Zar2b+oz9h86tP5uv733iWaUpCZvJwOmjgmrKqKlpozJPK4MYwbSU1CWYlXcaUHOe5DitFmtGCrUa2ukj4wGjhqpwJJPksGvLmGk7U0Yivc1r+roQWzgvmQFfumzmUi22+NsYOh9Q4lx6hq7Su4wT3jkMGyX1ktvsMrdulTcIBcqCMxnW6nJBHUdfapdQnuZFVwtJeJL3liulqtWMLWKyiezhy3/51LRkQR+a8a+o6QilWnQnk93Ir4ynQnoyFZVU8tLUS01QwsmicWvadhV5CcZxTQ7sazRpIXZ4NU/Fi0fNI+zVF/Wf5fES/G7RX2Ye/Vu+mQ+2FcVfNy6Mbn5LH4s4VoIAEAcN9Gdkrxy08nslRVvNy6E9r5+HVd4iKmDQVlYTPpVOoNe+fFm8fN0fstWlqfd+ww9n/ADdf3vvYkWlVkJn0aUcxhbj9vZUXWtr5G58WiayPPY5+eZ7G96sbXa2zJfSaq4U4Ul6TzfZ/6cm6ZeH12IX0LX/k1FkxrdheRm494HUeVTSn42R5gtoqdtreMu4qrXKaEx+cDY1yahMVnAt25zdpKK+soy48BWeK5uwPAzae7LrXVZKUc+RT4jQ0qenxR37p9EyC50tawZcYjLX87m5aexwHUprGpscRKzelBx5FOGlWkZZkso5DUPxZtHzSPs1S/wBZ/l8RD8btFjZx79W7P/dw+2Fb1vNy6Mbn5LHys4VoIAEAcd5GdorRywP9RUNz5mXRk1t56HVd4mqiDmWMhM39OYxr43Pc4kb83xj/AKtWuqP7Nn7DI2b/AIrF/nfeJOaIg5hUkJn0WE8xk7jE7THdqc6Hh0b+kZOH9O9W9jLNSRkPpXB6dKXX4FSxxTvpcXXNkgI383CNz2hwBROWVRotcKkqljTa4LL3EM0qaEhmcDa1yZhMUnAncFwvqcU21kYJ3swkPMGjM+pMafisq8QyhbybLfuszN3tshzG+zkf0DxR/fQurV5NspsNjnpMX7XKzhMdnAbOvc1H7qH2arVtu/8AL4lM/Pdos7QPfm3/AEuL2wrmt5uXRjc/JY9lmytBAAgDlugzttUP+F3qUF08qE+jJaPnY9UKypg16Fg4TNnCoXm7t/wI9v6kwdzVtar+xZ/lM3av+JJ/mfeJ+pg16FnoTN7TmdWErx4OX6Orkz4s8GOcDyDty5RkCrG0r6ueb3C2KWfh1s6cfKW1df3GHjrCoxNSQ3C1PiNYxninPxZ4zpAz7wedW1alrMpR3mUwfE3YTdKsnovfzT/3eKSrpqigndBXQSU8rdbZW70/+pRSa2S2G0hOnXhp0mmvYZ0VPUV0zYaKCSeV2pkbd8U1TlnuFrhwox0qjyXtG5gjDLcOUktfdHxirezxzvvFgjGkjPvJ/stcDGYle+FTUKa8VfqygYsvfu7fJauPPi7QI4AfIGenrJJ7FPTeSLa1tNRRUXv3simuTkJhOA22/FjH+6W/ZhKJ/ac/aZ+a+1Nfm+It7Ppu9B9Ki9sK5qSzpS6PuGqkcoseizpVAgAQBz14zoagcsbvUl7v7vPo+4kpeWuovqiDQdC+cwmaeFQtjojX4RMUQzc6l3oA2lo1doW8pvX2C0eMSiUtTe6T4S+Iq6iDXoWYjI21OoRlTBzJmExyEyVwxjC4YbygLeNUBP8AkPdkWc7Ds6NXQrS3vJQ2PahHEMGo33jrxZ8+fX5l7p90LC1bC01r3wu2xz0xfkf4QQrJXVGa2man9H8RpS8RZ+1NfsE+6FheihdxF75j8nT0xZn1uAC719PgeRwHEKkvHWXtb+WZRMUY0rsQAwBvFaIHPgWuzL+d529GrpQqubLuzwinaeM3pS58unzK+1ynhMZnA2Ncc8gCTsA2pqExWcBwXpnuRueupZT48dEyn07XEBqjpvSqp+0ytL626zXF5iyspzvFvH61F7YVpKXiS6Msq8MoMfCpShBAAgDCVofG5h1OGS4qRU4OL4nqeTzKVUQFjixw0tORXzCcZUqjg96eRfU55rMk8N1ohLqKU5BxzjJ5doWowG/S+zzfT5Cd9R0vrF2kVijDUjZX1dBGZI36XxtGZaduQ2hTYhhsoydWitnFch7DsSjkqdV5Pgyk1MGkgjSNaqoya2M0dOpmRVRAmoTHacyMni3pJTUJDkJZmprudMRlkdSjmbA8coTUJC06bNsR37w1gLnHQGt0k9CahIUqQyWb2IY2A8GVHGYrpeYXRMjIdBTvGTnO2OcNgGwHT/VpN5GVxPEYNOlRefNmrdKxBHWVMdppHh0VO/fTuadBk1b3q05855lNS2PM4w20lGOtlx3dP3IbBNI6uxNQsAzbE/hnnkDdPryHWp6k8qbJL56FFsdiRM6CABAAgCEvVCd8aiMZg/DHJzrIY/h0lJ3VNbOPzHrWts0GQMseWnUszCbW1FkpEjRX+SnAjrGOlaNAkb8Lr5VqbHH5RShXWft49opVsFN503l7DrkuVhqcnVBp3OHy0WnvCuVf2NXa5LtRBG2vKeyCfYzS+qwqPhi3dcQ+5SK4suDiSKliPDS97NLq3Bo+F7l+hb9y7Va04NEio4pw0/ezWblgcfCfaR0xN+5dKpb8MjrwbF3wn+p57qYF+UtHom/cvdZQ5o98Exf1Z/qeHFWDrY0vpZ6RruSlgzcewLpVqS3M5/4vEqzylF9r+ZVMSbotTXsfS2aN9JA7MOmcRwrhzZaG9Ok9C61ue4tbTAY0np13pPlw/f8A3eUlrtWWeZOjLSpYSLScBw7nmHH2egdV1rN7W1QGbDriZsb07T1DYu5yz2GQxK6Vapow8lfqy3rgrgQAIAEAeEAgg6ivGk1kwImts4eS6mcGnyDqWZvfo9GcnO3eXs4fsOUrtx2SIaotdU0kGB552jP1KjnhN7SeTpt9No9C6pcyPntNYdVLMf4Cuo2N3/1v3DcLukvSRG1FkuB1UNQeiIpmNnc+o/cNwvqHrr3kdPh+5nVbqo/yXJiNrceoxuGIW63zXvI6fDV4Oe9tdYf5LvuTMbeuvRY3DE7VfiL3o4JcLXzPxbRXH+Q5MxoVfVY1HFbLjVXvMRhm/wDmau9A5TRp1V6LPJYnYv8AFj7yRt+BsR1rgOIcXb5dS8MHZpPcmqdOo+BXXGM2NNbJ6XRf6hiYUwJR2WRtXVy8brm/BcW5Mj/ZHLznuTkY6Jl7/F6l0tCK0Y8ufX5FwXRUggAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEACABAAgAQAIAEAf/2Q==" alt="" />  
        <div class="wrapper">
          <button class="downloadBut" onclick="downloadFile('${item.cloudinaryVideoURL}', '${fileCover}')">Download</button>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Assuming innerFileCont is a variable defined elsewhere in your code
  innerFileCont.innerHTML = fileFormat;
}

// findFile.addEventListener("click", () => {
//   const val = localStorage.getItem("title");
//   if (urlInputLink.value == "") {
//     alert("enter in the pasted code");
//     return;
//   } else {
//     innerFileCont.innerHTML = "";
//     if (val === "video") {
//       getVid();
//     } else if (val === "images") {
//       getImage();
//     } else if (val === "reels") {
//       getReels();
//     }
//   }
// });

const sendDetailsVideo = (url, img, route) => {
  // fetch(`https://instagram-downloader.onrender.com/api/${route}`, {
  fetch(`https://instagram-backend-kcm3.onrender.com/api/${route}`, {
    // fetch(`http://localhost:8088/api/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoURL: url, videoThumbnail: img }),
  })
    .then((response) => {
      loader.classList.remove("show");
      if (response.ok) {
        innerFileCont?.classList.add("show");
        return response.json(); // Return the response data
      } else {
        loader.classList.remove("show");
        noticeMessage.textContent =
          "Not a video file. Select video and re-upload";
        notice.classList.add("show");
        wrapper.classList.add("show");
        // console.log("Upload failed.");
        innerFileCont?.classList.remove("show");
      }
    })
    .then((res) => {
      renderFileHTML(
        res.cloudinaryVideoURL,
        res.cloudinaryVideoThumbnailURL,
        ""
      );
    })
    .catch((error) => {
      loader.classList.remove("show");
      noticeMessage.textContent = "input the right media link";
      notice.classList.add("show");
      wrapper.classList.add("show");
    });
};
const sendDetailsImages = (url, img, route) => {
  // fetch(`https://instagram-downloader.onrender.com/api/${route}`, {
  fetch(`https://instagram-backend-kcm3.onrender.com/api/${route}`, {
    // fetch(`http://localhost:8088/api/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoURL: url, videoThumbnail: img }),
  })
    .then((response) => {
      loader.classList.remove("show");
      if (response.ok) {
        innerFileCont?.classList.add("show");
        return response.json(); // Return the response data
      } else {
        loader.classList.remove("show");
        noticeMessage.textContent =
          "Not an image file. Select images and re-upload";
        notice.classList.add("show");
        wrapper.classList.add("show");
        // console.log("Upload failed.");
        innerFileCont?.classList.remove("show");
      }
    })
    .then((res) => {
      renderFileHTML(
        res.cloudinaryVideoThumbnailURL,
        res.cloudinaryVideoThumbnailURL,
        ""
      );
    })
    .catch((error) => {
      loader.classList.remove("show");
      noticeMessage.textContent = "input the right media link";
      notice.classList.add("show");
      wrapper.classList.add("show");
    });
};

const finishUp = (url, image) => {
  fetch(`https://instagram-downloader.onrender.com/api/${route}`, {
    // fetch("http://localhost:8088/api/deleteVid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoURL: url, videoThumbnailURL: image }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Return the response data
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

function getIGTV(data) {
  let jsonData = data;
  let videoURL;
  let videoThumbnail;
  if (jsonData.graphql) {
    videoURL = jsonData?.graphql?.shortcode_media?.video_url;
    videoThumbnail = jsonData?.graphql?.shortcode_media?.display_url;
  } else if (jsonData.items) {
    videoURL = jsonData?.items?.[0]?.video_versions?.[0]?.url;
    videoThumbnail = jsonData?.items?.[0]?.image_versions2?.candidates[0].url;
  } else {
    // show_snackbar(2);
  }
  if (videoURL || videoThumbnail) {
    sendDetailsVideo(videoURL, videoThumbnail, "downloadVid");
  }
  urlInputLink.value = "";
}
function getVid(data) {
  let jsonData = data;
  let videoURL;
  let videoThumbnail;
  if (jsonData.graphql) {
    videoURL = jsonData?.graphql?.shortcode_media?.video_url;
    videoThumbnail = jsonData?.graphql?.shortcode_media?.display_url;
  } else if (jsonData.items) {
    videoURL = jsonData?.items?.[0]?.video_versions?.[0]?.url;
    videoThumbnail =
      jsonData?.items?.[0]?.image_versions2?.additional_candidates?.first_frame
        .url;
  } else {
    // show_snackbar(2);
  }
  if (videoURL || videoThumbnail) {
    sendDetailsVideo(videoURL, videoThumbnail, "downloadVid");
  }
  urlInputLink.value = "";
}

function getImage(data) {
  let jsonData = data;
  let imageURL;
  let imageThumbnail;
  if (jsonData.graphql) {
    imageURL = jsonData?.graphql?.shortcode_media?.display_resources[0].src;
    imageThumbnail = jsonData?.graphql?.shortcode_media?.display_url;
  } else if (jsonData.items) {
    // console.log(jsonData?.items?.[0]);
    imageURL = jsonData?.items?.[0]?.image_versions2?.candidates[0]?.url;
    imageThumbnail = jsonData?.items?.[0]?.image_versions2?.candidates[0]?.url;
  } else {
    // show_snackbar(2);
  }
  if (imageURL || imageThumbnail) {
    sendDetailsImages(imageURL, imageThumbnail, "downloadImg");
  }
  urlInputLink.value = "";
}

function getReels(data) {
  let jsonData = data;
  let reelURL;
  let reelThumbnail;
  var newArr;
  // console.log("reel oo");
  if (jsonData.graphql) {
    newArr = extractFromArr2(
      jsonData?.graphql?.shortcode_media?.edge_sidecar_to_children?.edges
    );
    // console.log(newArr);
  } else if (jsonData.items) {
    newArr = extractFromArr(jsonData?.items?.[0].carousel_media);
    // console.log("items");
    // console.log(newArr);
  } else {
    // show_snackbar(2);
  }
  if (newArr) {
    sendReelDetails(newArr, "downloadReel");
  }
  urlInputLink.value = "";
}

function extractFromArr(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array of objects");
  }
  const newArray = arr.map((obj) => {
    if (typeof obj === "object" && obj !== null) {
      const { video_versions, image_versions2 } = obj;
      // Return a new object with only 'video_versions' and 'img'
      return { video_versions, image_versions2 };
    } else {
      return {};
    }
  });

  return newArray;
}
function extractFromArr2(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array of objects");
  }
  const newArray = arr.map((obj) => {
    if (typeof obj === "object" && obj !== null) {
      const { video_url, display_url } = obj.node;
      // Return a new object with only 'video_url' and 'img'
      return { video_url, display_url };
    } else {
      return {};
    }
  });

  return newArray;
}
function extractFromStory(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array of objects");
  }
  const newArray = arr.map((obj) => {
    if (typeof obj === "object" && obj !== null) {
      const { video_url, thumbnail_url } = obj;
      // Return a new object with only 'video_url' and 'img'
      return { video_url, display_url: thumbnail_url };
    } else {
      return {};
    }
  });

  return newArray;
}

const sendReelDetails = (url, route) => {
  // fetch(`https://instagram-downloader.onrender.com/api/${route}`, {
  // fetch(`https://instagram-backend-kcm3.onrender.com/api/${route}`, {
  fetch(`https://instagram-backend-237l.onrender.com/api/${route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ videoURL: url }),
  })
    .then((response) => {
      loader.classList.remove("show");
      if (response.ok) {
        innerFileCont?.classList.add("show");
        return response.json(); // Return the response data
      } else {
        loader.classList.remove("show");
        // console.log("Upload failed.");
        innerFileCont?.classList.remove("show");
      }
    })
    .then((res) => {
      const data = res.uploadedLinks;
      // console.log(data);
      loader.classList.remove("show");
      if (data[0] == null) {
        console.log("nothing oo");
        loader.classList.remove("show");
        noticeMessage.textContent = "Choose the required media and try again";
        notice.classList.add("show");
        wrapper.classList.add("show");
        return;
      }
      fileFormat = data
        .map(
          (item, i) => `
 <div class="file">
<img src="data:image/jpeg;base64,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" alt="" />  
   <div class="wrapper">
     <button class="downloadBut" onclick="downloadFile('${item.cloudinaryVideoURL}', '')">Download</button>
   </div>
 </div>
`
        )
        .join("");

      innerFileCont.innerHTML = fileFormat;

      innerFileCont.style.display = "flex";
      // renderFileHTML("", "", res.uploadedLinks);
    })
    .catch((error) => {
      loader.classList.remove("show");
      noticeMessage.textContent = "input the right media link";
      notice.classList.add("show");
      wrapper.classList.add("show");
      console.error(error);
    });
};

function pasteText(targetInput) {
  navigator.clipboard
    .readText()
    .then((pastedText) => {
      targetInput.value = pastedText;
      targetInput.focus();
    })
    .catch((err) => {
      console.error("Unable to read clipboard data", err);
    });
}

pasteBut1.addEventListener("click", (e) => {
  e.preventDefault();
  pasteText(urlInputLink);
});

const sendUrlTest = (url) => {
  // Return the Promise returned by fetch
  // return fetch("https://python-backend-lr4t.onrender.com/api/downloadFile", {
  return fetch("https://instagram-backend-237l.onrender.com/api/downloadFile", {
    // return fetch("http://127.0.0.1:8088/api/downloadFile", {
    // return fetch("https://instagram-downloader.onrender.com/api/downloadFile", {
    method: "POST",
    mode: "cors", // Specify 'cors' mode
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  })
    .then((response) => {
      // console.log(response.status);
      if (
        response.status === 403 ||
        response.status === 401 ||
        response.status === 500
      ) {
        noticeMessage.textContent = "Error in media retrieval";
        notice.classList.add("show");
        wrapper.classList.add("show");
        throw new Error("Not authenticated");
      } else if (response.ok) {
        return response.json(); // Return the response data
      } else {
        // throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      loader.classList.remove("show");
      noticeMessage.textContent = "Choose the required media and try again";
      notice.classList.add("show");
      wrapper.classList.add("show");
      // console.log(error);
      throw error; // Rethrow the error to be caught in your original code
    });
};
const sendStory = (url) => {
  // Return the Promise returned by fetch
  // return fetch("https://python-backend-lr4t.onrender.com/api/downloadFile", {
  return fetch(
    "https://instagram-backend-237l.onrender.com/api/downloadStory",
    {
      // return fetch("http://127.0.0.1:8088/api/downloadStory", {
      // return fetch("https://instagram-downloader.onrender.com/api/downloadFile", {
      method: "POST",
      mode: "cors", // Specify 'cors' mode
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    }
  )
    .then((response) => {
      // console.log(response.status);
      if (
        response.status === 403 ||
        response.status === 401 ||
        response.status === 500
      ) {
        noticeMessage.textContent = "Error in media retrieval";
        notice.classList.add("show");
        wrapper.classList.add("show");
        throw new Error("Not authenticated");
      } else if (response.ok) {
        return response.json(); // Return the response data
      } else {
        // throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      loader.classList.remove("show");
      noticeMessage.textContent = "Choose the required media and try again";
      notice.classList.add("show");
      wrapper.classList.add("show");
      // console.log(error);
      throw error; // Rethrow the error to be caught in your original code
    });
};

async function getContentFromDynamicURL(dynamic_url) {
  const dynamicURL = `${dynamic_url}`; // Use CORS Anywhere as a proxy

  const customHeaders = {
    "X-Requested-With": "XMLHttpRequest", // A common header sent by browsers
    Referer: "https://www.instagram.com/", // Set the Referer header to the Instagram domain
  };

  try {
    const response = await fetch(dynamicURL, {
      method: "GET",

      headers: customHeaders,
      credentials: "include",
    });

    if (response.ok) {
      loader.classList.remove("show");
      const responseData = await response.json();
      // Process the responseData
      console.log(responseData);
    } else {
      console.error(`Request failed with status code: ${response.status}`);
    }
  } catch (error) {
    loader.classList.remove("show");
    console.error("An error occurred:", error);
  }
}

const anotherWayDownload = (url) => {
  return fetch(
    "https://instagram-backend-kcm3.onrender.com/api/downloadAnotherWay",
    {
      // return fetch("http://localhost:8088/api/downloadAnotherWay", {
      // return fetch("https://instagram-downloader.onrender.com/api/downloadFile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    }
  )
    .then((response) => {
      if (response.ok) {
        return response.json(); // Return the response data
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      loader.classList.remove("show");
      console.error(error);
      throw error; // Rethrow the error to be caught in your original code
    });
};

// const _ = (e) => document.querySelector(e);
// const render = _(".result");

const simpleWay = (url) => {
  fetch(url, {
    credentials: "include",
  }).then((r) =>
    r.text().then((r) => {
      console.log(r);
    })
  );
};

// function fetchAndProcessData(url) {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.withCredentials = true;

//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         var htmlContent = xhr.responseText;
//         try {
//           var data = JSON.parse(htmlContent);
//           var parsedData = "";

//           if (data.graphql) {
//             parsedData = data;
//           } else if (data.items) {
//             parsedData = data;
//           }

//           if (!parsedData) {
//             reject(new Error("Not found"));
//           } else {
//             resolve({ parsedData });
//           }
//         } catch (error) {
//           reject(error);
//         }
//       } else {
//         reject(new Error("Failed to fetch data from the URL"));
//       }
//     };

//     xhr.onerror = function () {
//       reject(new Error("Network error"));
//     };

//     xhr.send();
//   });
// }

// // Usage
