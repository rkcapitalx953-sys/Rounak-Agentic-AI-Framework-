"""
Generates the ten figures used in the research paper
"Impact of UPI-Based Digital Payments on the Velocity of Money and
Economic Activity in India".

All underlying figures are sourced from PIB / NPCI / RBI / MoSPI / TRAI
releases listed in the paper's bibliography. Run:  python3 make_figures.py
"""
import os
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "figures")
os.makedirs(OUT, exist_ok=True)

# ---- design tokens (validated categorical palette, light surface) -----------
BLUE, ORANGE, AQUA, YELLOW = "#2a78d6", "#eb6834", "#1baf7a", "#eda100"
INK, INK2, INK3 = "#0b0b0b", "#52514e", "#8a8985"
GRID, SURFACE = "#e6e5e1", "#ffffff"

plt.rcParams.update({
    "figure.facecolor": SURFACE, "axes.facecolor": SURFACE,
    "font.family": "DejaVu Sans", "font.size": 9.5,
    "axes.edgecolor": GRID, "axes.linewidth": 0.8,
    "axes.labelcolor": INK2, "axes.titlesize": 11,
    "xtick.color": INK2, "ytick.color": INK2,
    "xtick.labelsize": 9, "ytick.labelsize": 9,
    "axes.grid": True, "grid.color": GRID, "grid.linewidth": 0.7,
    "savefig.dpi": 220, "savefig.bbox": "tight", "savefig.pad_inches": 0.16,
})


def frame(ax, ygrid=True):
    """Recessive axes: no top/right spines, horizontal grid only."""
    for s in ("top", "right"):
        ax.spines[s].set_visible(False)
    ax.spines["left"].set_color(GRID)
    ax.spines["bottom"].set_color(GRID)
    ax.set_axisbelow(True)
    ax.grid(axis="y" if ygrid else "x")
    ax.grid(axis="x" if ygrid else "y", visible=False)
    ax.tick_params(length=0)


def title(ax, main, sub=None):
    """Headline + deck drawn as text above the axes, so they never collide."""
    if sub:
        ax.text(0, 1.175, main, transform=ax.transAxes, color=INK,
                fontsize=11.5, fontweight="bold", va="bottom")
        ax.text(0, 1.055, sub, transform=ax.transAxes, color=INK2,
                fontsize=9, va="bottom")
    else:
        ax.text(0, 1.045, main, transform=ax.transAxes, color=INK,
                fontsize=11.5, fontweight="bold", va="bottom")


def save(fig, name):
    path = os.path.join(OUT, name)
    fig.savefig(path)
    plt.close(fig)
    print("wrote", path)


# ---------------------------------------------------------------- data ------
FY = ["2016-17", "2017-18", "2018-19", "2019-20", "2020-21",
      "2021-22", "2022-23", "2023-24", "2024-25", "2025-26"]
VOL = [2, 92, 535, 1252, 2233, 4597, 8375, 13116, 18587, 24162]        # crore
VAL = [0.07, 1.10, 8.77, 21.32, 41.04, 84.16, 139.0, 199.9, 261.0, 314.0]  # ₹ lakh crore
SHORT = [f"{f[2:4]}–{f[5:7]}" for f in FY]                             # 16–17 ...


# ---- Figure 1: UPI volume ---------------------------------------------------
fig, ax = plt.subplots(figsize=(7.2, 3.7))
bars = ax.bar(SHORT, VOL, color=BLUE, width=0.62, zorder=3)
for b, v in zip(bars, VOL):
    ax.text(b.get_x() + b.get_width() / 2, v + 450, f"{v:,}",
            ha="center", va="bottom", fontsize=8.2, color=INK)
ax.set_ylim(0, 27500)
ax.set_ylabel("Transactions (crore)")
ax.set_xlabel("Financial year")
ax.yaxis.set_major_formatter(FuncFormatter(lambda x, _: f"{int(x):,}"))
frame(ax)
title(ax, "Figure 1  UPI transaction volume, FY 2016-17 to FY 2025-26",
      "Annual number of UPI transactions, in crore")
save(fig, "fig01_upi_volume.png")


# ---- Figure 2: UPI value ----------------------------------------------------
fig, ax = plt.subplots(figsize=(7.2, 3.7))
bars = ax.bar(SHORT, VAL, color=ORANGE, width=0.62, zorder=3)
for b, v in zip(bars, VAL):
    lab = f"{v:,.0f}" if v >= 10 else f"{v:,.2f}"
    ax.text(b.get_x() + b.get_width() / 2, v + 6, lab,
            ha="center", va="bottom", fontsize=8.2, color=INK)
ax.set_ylim(0, 355)
ax.set_ylabel("Value (₹ lakh crore)")
ax.set_xlabel("Financial year")
frame(ax)
title(ax, "Figure 2  UPI transaction value, FY 2016-17 to FY 2025-26",
      "Annual value of UPI transactions, in ₹ lakh crore")
save(fig, "fig02_upi_value.png")


# ---- Figure 3: average ticket size -----------------------------------------
ats = [v * 1e5 / n for v, n in zip(VAL, VOL)]
fig, ax = plt.subplots(figsize=(7.2, 3.6))
ax.plot(SHORT[1:], ats[1:], color=AQUA, linewidth=2.0, marker="o",
        markersize=6, markerfacecolor=AQUA, markeredgecolor=SURFACE,
        markeredgewidth=2, zorder=3)
for x, y in zip(SHORT[1:], ats[1:]):
    ax.annotate(f"₹{y:,.0f}", (x, y), textcoords="offset points",
                xytext=(0, 11), ha="center", fontsize=8.2, color=INK)
ax.set_ylim(1050, 2020)
ax.margins(x=0.06)
ax.set_ylabel("Average value per transaction (₹)")
ax.set_xlabel("Financial year")
frame(ax)
title(ax, "Figure 3  Average value of a single UPI transaction",
      "Transaction value divided by transaction volume; FY 2016-17 excluded (negligible base)")
save(fig, "fig03_ticket_size.png")


# ---- Figure 4: UPI turnover as a multiple of nominal GDP --------------------
fy4 = ["2022-23", "2023-24", "2024-25", "2025-26"]
upi4 = [139.0, 199.9, 261.0, 314.0]
gdp4 = [269.50, 295.36, 318.07, 346.36]
ratio = [u / g for u, g in zip(upi4, gdp4)]
fig, ax = plt.subplots(figsize=(6.4, 3.5))
bars = ax.bar(fy4, ratio, color=BLUE, width=0.5, zorder=3)
for b, r in zip(bars, ratio):
    ax.text(b.get_x() + b.get_width() / 2, r + 0.018, f"{r:.2f}×",
            ha="center", va="bottom", fontsize=9.5, color=INK,
            fontweight="bold")
ax.axhline(1.0, color=INK3, linewidth=1.0, linestyle=(0, (4, 3)), zorder=2)
ax.text(3.42, 1.005, "parity with GDP", fontsize=8.2, color=INK3,
        ha="right", va="bottom")
ax.set_ylim(0, 1.12)
ax.set_ylabel("UPI value ÷ nominal GDP")
ax.set_xlabel("Financial year")
frame(ax)
title(ax, "Figure 4  UPI turnover relative to nominal GDP",
      "A transactions-velocity proxy: rupees moved over UPI per rupee of national output")
save(fig, "fig04_turnover_gdp.png")


# ---- Figure 5: UPI's share of retail digital payments ----------------------
fig, ax = plt.subplots(figsize=(6.4, 2.5))
ax.barh([0], [81], color=ORANGE, height=0.5, zorder=3)
ax.barh([0], [19], left=[81 + 0.35], color="#d9d8d3", height=0.5, zorder=3)
ax.text(40.5, 0, "UPI  81%", ha="center", va="center", fontsize=11,
        color="#ffffff", fontweight="bold")
ax.text(90.7, 0, "all other modes  19%", ha="center", va="center",
        fontsize=9, color=INK2)
ax.set_xlim(0, 100.5)
ax.set_ylim(-0.55, 0.55)
ax.set_yticks([])
ax.set_xticks([0, 25, 50, 75, 100])
ax.set_xticklabels(["0%", "25%", "50%", "75%", "100%"])
for sp in ("top", "right", "left"):
    ax.spines[sp].set_visible(False)
ax.grid(False)
ax.tick_params(length=0)
title(ax, "Figure 5  UPI's share of retail digital payment volume, FY 2024-25",
      "Share of the total number of retail digital payment transactions in India")
save(fig, "fig05_digital_share.png")


# ---- Figure 6: demonetisation break ----------------------------------------
fig, ax = plt.subplots(figsize=(5.8, 3.4))
months = ["Oct 2016\n(pre-demonetisation)", "May 2017\n(post-demonetisation)"]
vals6 = [71.27, 111.45]
bars = ax.bar(months, vals6, color=[INK3, BLUE], width=0.46, zorder=3)
for bb, v in zip(bars, vals6):
    ax.text(bb.get_x() + bb.get_width() / 2, v + 2.2, f"{v:.2f}",
            ha="center", va="bottom", fontsize=10, color=INK,
            fontweight="bold")
ax.annotate("", xy=(1, 128), xytext=(0, 128),
            arrowprops=dict(arrowstyle="->", color=ORANGE, lw=1.6))
ax.text(0.5, 131, "+56%", ha="center", fontsize=10.5, color=ORANGE,
        fontweight="bold")
ax.set_ylim(0, 152)
ax.set_ylabel("Digital transactions (crore per month)")
frame(ax)
title(ax, "Figure 6  Digital payments around demonetisation",
      "Monthly digital transaction volume, October 2016 vs May 2017")
save(fig, "fig06_demonetisation.png")


# ---- Figure 7: COVID-19 break ----------------------------------------------
fig, ax = plt.subplots(figsize=(7.0, 3.6))
idx = list(range(3, 8))          # FY 2019-20 .. FY 2023-24
xs = [SHORT[i] for i in idx]
ys = [VOL[i] for i in idx]
ax.axvspan(0.72, 2.28, color="#f4f3ef", zorder=0)
ax.text(1.5, 12300, "pandemic years", ha="center", fontsize=8.6, color=INK3)
ax.plot(xs, ys, color=BLUE, linewidth=2.2, marker="o", markersize=7,
        markerfacecolor=BLUE, markeredgecolor=SURFACE, markeredgewidth=2,
        zorder=3)
for x, y in zip(xs, ys):
    ax.annotate(f"{y:,}", (x, y), textcoords="offset points",
                xytext=(0, 12), ha="center", fontsize=8.8, color=INK)
ax.set_ylim(0, 15200)
ax.set_ylabel("UPI transactions (crore)")
ax.set_xlabel("Financial year")
ax.yaxis.set_major_formatter(FuncFormatter(lambda x, _: f"{int(x):,}"))
frame(ax)
title(ax, "Figure 7  UPI volume before, during and after COVID-19",
      "FY 2019-20 to FY 2023-24; shaded band marks FY 2020-21 and FY 2021-22")
save(fig, "fig07_covid.png")


# ---- Figure 8: inclusion and digitalisation indices -------------------------
fig, (axa, axb) = plt.subplots(1, 2, figsize=(7.4, 3.3))
b1 = axa.bar(["Mar 2024", "Mar 2025"], [64.2, 67.0], color=AQUA,
             width=0.45, zorder=3)
for bb, v in zip(b1, [64.2, 67.0]):
    axa.text(bb.get_x() + bb.get_width() / 2, v + 1.1, f"{v:.1f}",
             ha="center", va="bottom", fontsize=10, color=INK,
             fontweight="bold")
axa.set_ylim(0, 78)
axa.set_ylabel("Index value (0–100)")
frame(axa)
axa.set_title("RBI Financial Inclusion Index", loc="left", fontsize=9.8,
              color=INK, pad=8)

b2 = axb.bar(["Sep 2024", "Mar 2025"], [465.33, 493.22], color=BLUE,
             width=0.45, zorder=3)
for bb, v in zip(b2, [465.33, 493.22]):
    axb.text(bb.get_x() + bb.get_width() / 2, v + 8, f"{v:.2f}",
             ha="center", va="bottom", fontsize=10, color=INK,
             fontweight="bold")
axb.set_ylim(0, 575)
axb.set_ylabel("Index value (Mar 2018 = 100)")
frame(axb)
axb.set_title("RBI Digital Payments Index", loc="left", fontsize=9.8,
              color=INK, pad=8)
fig.suptitle("Figure 8  Financial inclusion and payment digitalisation, RBI indices",
             x=0.005, y=1.04, ha="left", fontsize=11.5, color=INK,
             fontweight="bold")
save(fig, "fig08_indices.png")


# ---- Figure 9: rural-urban digital divide ----------------------------------
fig, (axa, axb) = plt.subplots(1, 2, figsize=(7.4, 3.5))

# Panel A - absolute subscribers (millions)
ba = axa.bar(["Urban", "Rural"], [579.46, 423.39], color=[BLUE, ORANGE],
             width=0.5, zorder=3)
for bb, v in zip(ba, [579.46, 423.39]):
    axa.text(bb.get_x() + bb.get_width() / 2, v + 14, f"{v:,.1f}",
             ha="center", va="bottom", fontsize=9.5, color=INK,
             fontweight="bold")
axa.set_ylim(0, 700)
axa.set_ylabel("Internet subscribers (million)")
frame(axa)
axa.text(0, 1.045, "Internet subscribers, August 2025", transform=axa.transAxes,
         color=INK, fontsize=9.8, fontweight="bold", va="bottom")

# Panel B - penetration per 100 people
bb_ = axb.bar(["Urban", "Rural"], [113.83, 46.73], color=[BLUE, ORANGE],
              width=0.5, zorder=3)
for bb, v in zip(bb_, [113.83, 46.73]):
    axb.text(bb.get_x() + bb.get_width() / 2, v + 2.8, f"{v:,.2f}",
             ha="center", va="bottom", fontsize=9.5, color=INK,
             fontweight="bold")
axb.set_ylim(0, 138)
axb.set_ylabel("Subscribers per 100 people")
frame(axb)
axb.text(0, 1.045, "Internet penetration, August 2025", transform=axb.transAxes,
         color=INK, fontsize=9.8, fontweight="bold", va="bottom")

fig.suptitle("Figure 9  The rural\u2013urban digital divide",
             x=0.005, y=1.135, ha="left", fontsize=11.5, color=INK,
             fontweight="bold")
fig.text(0.005, 1.055, "Urban internet penetration is roughly 2.4 times the rural rate",
         ha="left", fontsize=9, color=INK2)
fig.subplots_adjust(wspace=0.32)
save(fig, "fig09_divide.png")


# ---- Figure 10: India's share of global real-time payments -----------------
fig, ax = plt.subplots(figsize=(6.2, 2.5))
ax.barh([0], [49], color=BLUE, height=0.5, zorder=3)
ax.barh([0], [51], left=[49 + 0.35], color="#d9d8d3", height=0.5, zorder=3)
ax.text(24.5, 0, "India (UPI)  49%", ha="center", va="center",
        fontsize=11, color="#ffffff", fontweight="bold")
ax.text(75, 0, "rest of the world  51%", ha="center", va="center",
        fontsize=9.4, color=INK2)
ax.set_xlim(0, 100.5)
ax.set_ylim(-0.55, 0.55)
ax.set_yticks([])
ax.set_xticks([0, 25, 50, 75, 100])
ax.set_xticklabels(["0%", "25%", "50%", "75%", "100%"])
for s in ("top", "right", "left"):
    ax.spines[s].set_visible(False)
ax.grid(False)
ax.tick_params(length=0)
title(ax, "Figure 10  India's share of global real-time payment volume, 2024",
      "As recognised by the IMF, June 2025")
save(fig, "fig10_global_share.png")

print("\nAverage ticket size (₹):",
      ", ".join(f"{f}={a:,.0f}" for f, a in zip(FY, ats)))
print("UPI/GDP ratios:", ", ".join(f"{f}={r:.3f}" for f, r in zip(fy4, ratio)))
