import HeadMeta from "../../components/HeadMeta/HeadMeta";
import { ContentBlockLeftImg, ContentBlockRightImg } from "../../components/ContentBlock/ContentBlock";
import toTop from "../../functions/toTop/toTop";

function Index(props) {
  toTop();
  return (
    <>
      <h1 className="h1 alignCenter">
        {`< `}hello, my friend! you can get to know my life on this site {` />`}
      </h1>
      <HeadMeta page={props.page} />
      {props.forIndexPage.map((data) => {
        return <ContentBlockLeftImg data={data} key={data.title} />;
      })}
    </>
  );
}

export default Index;