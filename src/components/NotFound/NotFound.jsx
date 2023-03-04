import Error404 from "../../images/Error404.svg";
import {
  BackArrow,
  BackLink,
} from "../../pages/ProductDetailPage/ProductDetailPage.styled";
export default function NotFound() {
  return (
    <div>
      <BackLink to="/">
        <BackArrow /> Home
      </BackLink>
      <img src={Error404} alt="Page not found"></img>
    </div>
  );
}
