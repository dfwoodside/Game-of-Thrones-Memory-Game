
<Container className="gridComponent">

<Row>
  {props.state.friends.map(friend => (
    <Col size="md-3 sm-6">
      <FriendCard
        key={friend.id}
        handleClick={props.handleClick}
        handleIncrement={props.handleIncrement}
        handleReset={props.handleReset}
        handleShuffle={props.handleShuffle}
        id={friend.id}
        image={friend.image}
        name={friend.name}
      />
    </Col>
  ))}
</Row>

</Container>