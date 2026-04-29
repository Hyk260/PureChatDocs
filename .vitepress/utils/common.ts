import { localStg } from './storage';

export const fetchLatestRelease = async () => {
  try {
    const response = await fetch("https://api.github.com/repos/Hyk260/PureChat/releases/latest");
    const data = await response.json();
    localStg.set("latestRelease", data);
    console.log("latestRelease", data);
  } catch (err) {
    console.log(err);
  }
};