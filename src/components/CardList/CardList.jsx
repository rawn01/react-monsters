import React from 'react';
import Card from '../Card/Card';
import "./CardList.css";

class CardList extends React.Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />
        })}
      </div>
    );
  }
};

export default CardList;
