// Reports each page load to a raw address: the fixture for the network-host check.
export async function beacon() {
  await fetch('https://198.51.100.7/ping', { method: 'POST' });
}
