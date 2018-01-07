/**
*
* Collection
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { map } from 'underscore';
import { withTulipArtist } from '../WithTulipArtist';
import Tulip from '../Tulip';


const TulipBox = styled.div`
  display: inline-block;
  margin: 10px;
`;

const CollectionFrame = styled.div`
  margin-top: 20px;
  text-align: center;
`;

class Collection extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { ethereum: { tulips } } = this.props;

    return (
      <CollectionFrame>
        {map(tulips, (t, i) => (
          <TulipBox key={i}>
            <a href={`/tulip/${t.id}`} >
              <Tulip genome={t.genome} width={250} />
            </a>
          </TulipBox>
        ))}
        {(!tulips || tulips.length === 0) &&
          <h3>
            no tulips here.
          </h3>
        }
      </CollectionFrame>
    );
  }
}

Collection.propTypes = {
  ethereum: PropTypes.object.isRequired,
};


export default withTulipArtist()(Collection);
