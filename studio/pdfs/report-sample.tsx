/**
 * React-PDF サンプル — Mission Brief レポート
 *
 * 実行例（自プロジェクト側で）:
 *   import React from 'react'
 *   import { renderToFile } from '@react-pdf/renderer'
 *   import ReportSample from './report-sample'
 *   await renderToFile(<ReportSample />, '/tmp/report.pdf')
 *
 * 依存: @react-pdf/renderer  @karinMusaka/presets
 */
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import theme from "@karinMusaka/presets/react-pdf";

const { styles: base, colors } = theme as {
  styles: Record<string, any>;
  colors: Record<string, string>;
  fonts: Record<string, string>;
};

const styles = StyleSheet.create({
  ...base,
  meta: { fontSize: 9, color: colors.textMuted, marginBottom: 24 },
  section: { marginBottom: 16 },
});

export default function ReportSample() {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.h1}>Mission Brief</Text>
        <Text style={styles.meta}>Operative: 木原 学   /   Status: Operational</Text>

        <View style={styles.section}>
          <Text style={styles.h3}>Status</Text>
          <Text style={styles.body}>
            All systems nominal. <Text style={styles.accent}>ETA T-minus 24h.</Text>
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.card}>
          <Text style={styles.h3}>Threat Vectors</Text>
          <Text style={styles.body}>Frontend — LOW</Text>
          <Text style={styles.body}>Backend — MED</Text>
          <Text style={styles.body}>Comm — HIGH</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.badge}>LIVE</Text>
        </View>

        <Text style={styles.code}>def engage(target): return True</Text>
      </Page>
    </Document>
  );
}
