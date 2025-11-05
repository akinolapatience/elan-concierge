// import * as React from "react";
// import {
//   Html,
//   Head,
//   Body,
//   Container,
//   Section,
//   Text,
//   Img,
//   Row,
//   Column,
//   Hr,
// } from "@react-email/components";

// interface EarningsItem {
//   name: string;
//   amount: string;
// }

// interface DeductionItem {
//   payable: string;
//   employee: string;
//   provider: string;
// }

// interface PayslipData {
//   companyName: string;
//   payPeriod: string;
//   employeeName: string;
//   accountName: string;
//   employeeId: string;
//   accountNumber: string;
//   paymentDate: string;
//   bankName: string;
//   earnings: EarningsItem[];
//   deductions: DeductionItem[];
//   totalDeductions: string;
//   totalNetPay: string;
// }

// export const PayslipTemplate: React.FC = () => {
//   const payslipData: PayslipData = {
//     companyName: "ACME LIMITED",
//     payPeriod: "Pay Period: 1st - 31st May, 2025",
//     employeeName: "Gabriella Johnson",
//     accountName: "Gabriella Johnson",
//     employeeId: "1649000866",
//     accountNumber: "2046900866",
//     paymentDate: "12th May, 2025",
//     bankName: "United Bank for Africa",
//     earnings: [
//       { name: "Basic Salary", amount: "11,588.75" },
//       { name: "Housing Allowance", amount: "17,353.08" },
//       { name: "Transport Allowance", amount: "17,353.08" },
//       { name: "Meal Allowance", amount: "23,137.43" },
//       { name: "GROSS PAY", amount: "23,137.43" },
//     ],
//     deductions: [
//       { payable: "Tax", employee: "12,500", provider: "FCTIRS" },
//       {
//         payable: "Pension",
//         employee: "12,500",
//         provider: "Terry Thompson LTD",
//       },
//     ],
//     totalDeductions: "23,137.43",
//     totalNetPay: "₦101,807.20",
//   };

//   return (
//     <Html>
//       <Head />
//       <Body style={styles.body}>
//         <Container style={styles.container}>
//           <Section style={styles.header}>
//             <Row style={{ width: "100%", alignContent: "space-between" }}>
//               <Column
//                 style={{
//                   textAlign: "left",
//                   verticalAlign: "middle",
//                   paddingRight: "20px",
//                 }}
//               >
//                 <Img
//                   src="https://firebasestorage.googleapis.com/v0/b/e-wambe.appspot.com/o/WorkStat%20Logo.png?alt=media&token=ecf9eb27-f5e9-4cf5-ae1d-7c658e101b80"
//                   alt="WorkStat Logo"
//                   width="123"
//                   height="53px"
//                   style={{
//                     display: "block",
//                     objectFit: "contain",
//                     margin: 0,
//                   }}
//                 />
//               </Column>

//               <Column
//                 style={{
//                   textAlign: "right",
//                   verticalAlign: "middle",
//                   paddingLeft: "380px",
//                   paddingTop: "26px",
//                 }}
//               >
//                 <Text style={styles.payslipLabel}>Payslip</Text>
//               </Column>
//             </Row>
//           </Section>

//           <Section style={styles.paper}>
//             <Section style={styles.companyInfo}>
//               <Text style={styles.companyName}>{payslipData.companyName}</Text>
//               <Text style={styles.payPeriod}>{payslipData.payPeriod}</Text>
//               <Hr style={styles.dottedDivider} />
//             </Section>

//             <Section style={styles.detailsGrid}>
//               <Section>
//                 <Text style={styles.detailLabel}>Employee Name:</Text>
//                 <Text style={styles.detailValue}>
//                   {payslipData.employeeName}
//                 </Text>
//                 <Text style={styles.detailLabel}>Employee ID:</Text>
//                 <Text style={styles.detailValue}>{payslipData.employeeId}</Text>
//                 <Text style={styles.detailLabel}>Payment Date:</Text>
//                 <Text style={styles.detailValue}>
//                   {payslipData.paymentDate}
//                 </Text>
//               </Section>

//               <Section>
//                 <Text style={styles.detailLabel}>Account Name:</Text>
//                 <Text style={styles.detailValue}>
//                   {payslipData.accountName}
//                 </Text>
//                 <Text style={styles.detailLabel}>Account Number:</Text>
//                 <Text style={styles.detailValue}>
//                   {payslipData.accountNumber}
//                 </Text>
//                 <Text style={styles.detailLabel}>Bank Name:</Text>
//                 <Text style={styles.detailValue}>{payslipData.bankName}</Text>
//               </Section>
//             </Section>

//             {/* Earnings */}
//             <Section style={{ marginBottom: "32px" }}>
//               <Text style={styles.sectionHeader}>
//                 <span>ITEM</span>
//                 <span style={{ float: "right" }}>AMOUNT (NGN)</span>
//               </Text>
//               <Hr style={styles.divider} />
//               <Text style={styles.sectionTitle}>EARNINGS:</Text>

//               {payslipData.earnings.map((earning, index) => (
//                 <Text
//                   key={index}
//                   style={
//                     earning.name === "GROSS PAY"
//                       ? styles.grossPayRow
//                       : styles.itemRow
//                   }
//                 >
//                   <span>{earning.name}</span>
//                   <span style={{ float: "right" }}>{earning.amount}</span>
//                 </Text>
//               ))}
//             </Section>

//             <Section>
//               <Text style={styles.sectionTitle}>DEDUCTIONS:</Text>

//               {payslipData.deductions.map((deduction, index) => (
//                 <Section key={index} style={{ marginBottom: "24px" }}>
//                   <Text style={styles.deductionTitle}>{deduction.payable}</Text>
//                   <Text style={styles.deductionHeader}>
//                     <span>Payable</span>
//                     <span style={{ margin: "0 50px" }}>ID</span>
//                     <span style={{ float: "right" }}>Provider</span>
//                   </Text>
//                   <Text style={styles.deductionRow}>
//                     <span>{deduction.employee}</span>
//                     <span style={{ margin: "0 50px" }}>
//                       {deduction.employee}
//                     </span>
//                     <span style={{ float: "right" }}>{deduction.provider}</span>
//                   </Text>

//                   {index < payslipData.deductions.length - 1 && (
//                     <Hr style={{ ...styles.divider, margin: "16px 0" }} />
//                   )}
//                 </Section>
//               ))}

//               <Text style={styles.totalRow}>
//                 <span>TOTAL DEDUCTIONS</span>
//                 <span style={{ float: "right" }}>
//                   {payslipData.totalDeductions}
//                 </span>
//               </Text>
//             </Section>

//             <Hr style={styles.divider} />

//             <Section style={styles.netPaySection}>
//               <Text style={styles.netPayLabel}>TOTAL NET PAY</Text>
//               <Text style={styles.netPayAmount}>{payslipData.totalNetPay}</Text>
//             </Section>
//           </Section>

//           {/* Footer */}
//           <Text style={styles.footer}>
//             For complaints regarding this transaction, contact our{" "}
//             <a href="#" style={styles.link}>
//               support team
//             </a>
//           </Text>
//         </Container>
//       </Body>
//     </Html>
//   );
// };

// const styles = {
//   body: {
//     backgroundColor: "#f5f5f5",
//     fontFamily: "Arial, sans-serif",
//     padding: "24px",
//   },
//   container: {
//     maxWidth: "600px",
//     margin: "0 auto",
//     backgroundColor: "#EFF5F8",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "24px",
//   },
//   payslipLabel: {
//     fontSize: "18px",
//     fontWeight: "600",
//     color: "#667085",
//     textAlign: "right" as const,
//   },
//   paper: {
//     backgroundColor: "white",
//     padding: "22px",
//     // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   companyInfo: {
//     textAlign: "center" as const,
//     marginBottom: "32px",
//   },
//   companyName: {
//     fontSize: "18px",
//     fontWeight: "600",
//     marginBottom: "8px",
//   },
//   payPeriod: {
//     fontSize: "14px",
//     color: "#868e96",
//   },
//   dottedDivider: {
//     borderTop: "1px dotted #dee2e6",
//     margin: "16px 0",
//   },
//   detailsGrid: {
//     display: "flex",
//     justifyContent: "space-between",
//     gap: "24px",
//     marginBottom: "32px",
//   },
//   detailLabel: {
//     fontSize: "12px",
//     color: "#868e96",
//     marginBottom: "4px",
//   },
//   detailValue: {
//     fontSize: "14px",
//     fontWeight: "500",
//     marginBottom: "16px",
//   },
//   sectionHeader: {
//     fontSize: "12px",
//     fontWeight: "600",
//     color: "#868e96",
//     marginBottom: "16px",
//   },
//   sectionTitle: {
//     fontSize: "14px",
//     fontWeight: "600",
//     color: "#fa5252",
//     marginBottom: "16px",
//   },
//   itemRow: {
//     fontSize: "14px",
//     marginBottom: "8px",
//   },
//   grossPayRow: {
//     fontSize: "14px",
//     fontWeight: "600",
//     marginBottom: "8px",
//   },
//   deductionTitle: {
//     fontSize: "16px",
//     fontWeight: "500",
//     marginBottom: "12px",
//     color: "#495057",
//   },
//   deductionHeader: {
//     fontSize: "12px",
//     color: "#868e96",
//     marginBottom: "8px",
//   },
//   deductionRow: {
//     fontSize: "14px",
//     marginBottom: "16px",
//   },
//   totalRow: {
//     fontSize: "14px",
//     fontWeight: "600",
//     marginTop: "16px",
//   },
//   divider: {
//     borderTop: "1px solid #e9ecef",
//     margin: "24px 0",
//   },
//   netPaySection: {
//     textAlign: "center" as const,
//     marginBottom: "24px",
//   },
//   netPayLabel: {
//     fontSize: "12px",
//     color: "#868e96",
//     marginBottom: "8px",
//   },
//   netPayAmount: {
//     fontSize: "36px",
//     fontWeight: "700",
//   },
//   footer: {
//     fontSize: "12px",
//     color: "#868e96",
//     textAlign: "center" as const,
//     marginTop: "24px",
//   },
//   link: {
//     color: "#00a8e8",
//     textDecoration: "none",
//   },
// };

// export default PayslipTemplate;
