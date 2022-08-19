/** @format */

import { SupportedChainId } from './tokens';

type AddressMap = { [chainId: number]: string };

// eslint-disable-next-line import/prefer-default-export
export const METASWAP_ROUTER_CONTRACT_ADDRESS: AddressMap = {
	[SupportedChainId.POLYGON]: '0xE10F5F77CF90c99976BceE524Fbf88504A2e6616',
};

export const MULTICALL_ADDRESS: AddressMap = {
	[SupportedChainId.POLYGON]: '0x58Ae7C050830b75d4B49CEC78D4D93b558447344',
};

export const FORWARDER_ADDRESS: AddressMap = {
	[SupportedChainId.POLYGON]: '0xCe7cbDA67DE0BFdBBBAEA0DB94434a722A353CF4',
};

// eslint-disable-next-line import/prefer-default-export
export const AGGREGATOR_ADDRESS: AddressMap = {
	[SupportedChainId.POLYGON]: '0x67b1844c457f1770fE9588da116F2E1149D73B98',
};

export const ONEINCH_AGGREGATOR_ADDRESS: AddressMap = {
	[SupportedChainId.POLYGON]: '0x1111111254fb6c44bAC0beD2854e76F90643097d',
};

export const ZEROX_AGGREGATOR_ADDRESS: AddressMap = {
	[SupportedChainId.POLYGON]: '0xDef1C0ded9bec7F1a1670819833240f027b25EfF',
};

export const PROVIDER_ADDRESS: AddressMap = {
	[SupportedChainId.POLYGON]: 'https://polygon-rpc.com',
};
