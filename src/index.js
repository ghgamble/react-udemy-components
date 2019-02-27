import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
      return (
            <div className="ui container comments">
                  <ApprovalCard>
                        <CommentDetail
                              author="Sam"
                              date="Yesterday at 5:15PM"
                              text="Nice blog post!"
                              avatar={faker.image.avatar()}
                        />
                  </ApprovalCard>
                  <ApprovalCard>
                        <CommentDetail
                              author="Alex"
                              date="Today at 5:27PM"
                              text="Ditto!"
                              avatar={faker.image.avatar()}
                        />
                  </ApprovalCard>
                  <ApprovalCard>
                        <CommentDetail
                              author="Jane"
                              date="Today at 7:02PM"
                              text="Thanks Sam and Alex!"
                              avatar={faker.image.avatar()}
                        />
                  </ApprovalCard>
            </div>
      );
};

ReactDOM.render(<App />, document.querySelector('#root'));
