/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { Button, Container, Menu, Segment, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const History: React.FC = () => {
  const wrapperScoreLink = css`
    color: black !important;
  `;

  const wrapperAddHistoryButton = css`
    color: white !important;
  `;

  return (
    <Segment inverted color="black">
      <Menu attached="top" compact inverted widths={3}>
        <Menu.Item as="a">
          <Link to="/">
            <Button css={wrapperScoreLink} color="olive">
              Score
            </Button>
          </Link>
        </Menu.Item>
        <Menu.Item as="a">History</Menu.Item>
        <Menu.Item as="a">
          <Button css={wrapperAddHistoryButton} inverted color="green">
            Add History
          </Button>
        </Menu.Item>
      </Menu>
      <Table attached inverted>
        <Table.Header>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>VS</Table.HeaderCell>
          <Table.HeaderCell>Winner</Table.HeaderCell>
          <Table.HeaderCell>You</Table.HeaderCell>
          <Table.HeaderCell>Opponent</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
          <Table.Row>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
          <Table.Row>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.HeaderCell>Total</Table.HeaderCell>
          <Table.HeaderCell />
          <Table.HeaderCell />
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Footer>
      </Table>
    </Segment>
  );
};
export default History;
