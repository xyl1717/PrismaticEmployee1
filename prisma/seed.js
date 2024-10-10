const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const employees = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' },
    { name: 'David' },
    { name: 'Eva' },
    { name: 'Frank' },
    { name: 'Grace' },
    { name: 'Hannah' },
    { name: 'Ivy' },
    { name: 'Jack' }
  ];

  for (const employee of employees) {
    await prisma.employee.create({
      data: employee,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
