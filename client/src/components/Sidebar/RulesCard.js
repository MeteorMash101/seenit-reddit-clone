import classes from './RulesCard.module.css';
const RulesCard = (props) => {
  return (
    <div className={classes.wrapper}>
        <h4 className={classes.h4}>r/subredditRules:</h4>
        <ol className={classes.ol}>
          <li>Be civil</li>
          <li>No Edited Titles</li>
          <li>Avoid reposting information</li>
          <li>Avoid politics</li>
          <li>Keep information quality high</li>
          <li>No clickbait</li>
          <li>No spam or self-promotion</li>
          <li>Keep Submissions On Topic</li>
          <li>No data trackers</li>
        </ol>
    </div>
  );
}

export default RulesCard;
