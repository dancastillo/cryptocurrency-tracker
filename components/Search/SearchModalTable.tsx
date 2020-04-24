import React from 'react';
import { Image, Modal, Grid, Table } from 'semantic-ui-react';

const SearchModalTable = ({
    isModalOpen,
    onClose,
    coinSymbol,
    coinName,
    currency,
    logoUrl,
    price,
    marketCap,
}) => {
    return (
        <Modal open={isModalOpen} onClose={onClose} style={{ top: '33%', width: '33%' }}>
            <Modal.Header>
              { coinName }
            </Modal.Header>
            <Modal.Content image>
                <Grid columns={2}>
                    <Grid.Column>
                        <Image wrapped size="medium" src={logoUrl} />
                    </Grid.Column>
                    <Grid.Column>
                        <Table basic="very">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Symbol</Table.Cell>
                                    <Table.Cell>{coinSymbol}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Currency</Table.Cell>
                                    <Table.Cell>{currency}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Price</Table.Cell>
                                    <Table.Cell>{price}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Market Cap</Table.Cell>
                                    <Table.Cell>{marketCap}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid>
            </Modal.Content>
        </Modal>
    );
};


export default SearchModalTable;
