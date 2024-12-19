import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[600],
  },
  content: {
    gap: 12,
    padding: 24,
    paddingBottom: 100,
  },
  indicator: {
    width: 80,
    height: 4,
    backgroundColor: colors.gray[200],
  },
  title: {
    color: colors.gray[100],
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 16,
  },
})